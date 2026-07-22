"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluacionesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let EvaluacionesService = class EvaluacionesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async obtenerPorModulo(moduloId) {
        const evaluacion = await this.prisma.evaluacion.findUnique({
            where: { moduloId },
            select: {
                id: true,
                moduloId: true,
                puntajeMinimo: true,
                preguntas: {
                    select: { id: true, evaluacionId: true, pregunta: true, opciones: true },
                    orderBy: { id: 'asc' },
                },
            },
        });
        if (!evaluacion)
            throw new common_1.NotFoundException('No hay evaluación para este módulo');
        return evaluacion;
    }
    async registrarIntento(moduloId, usuarioId, dto) {
        const evaluacion = await this.prisma.evaluacion.findUnique({
            where: { moduloId },
            include: { preguntas: { orderBy: { id: 'asc' } } },
        });
        if (!evaluacion)
            throw new common_1.NotFoundException('Evaluación no encontrada');
        const { preguntas } = evaluacion;
        if (dto.respuestas.length !== preguntas.length) {
            throw new common_1.BadRequestException(`Se esperaban ${preguntas.length} respuestas`);
        }
        const correctas = preguntas.filter((p, i) => p.respuesta === dto.respuestas[i]).length;
        const puntaje = Math.round((correctas / preguntas.length) * 100);
        const aprobado = puntaje >= evaluacion.puntajeMinimo;
        const intento = await this.prisma.evaluacionIntento.create({
            data: { evaluacionId: evaluacion.id, usuarioId, puntaje, aprobado },
        });
        if (aprobado) {
            await this.completarModulo(usuarioId, moduloId, puntaje);
        }
        return { ...intento, puntaje, aprobado, correctas, total: preguntas.length };
    }
    async completarModulo(usuarioId, moduloId, puntaje) {
        await this.prisma.progresoUsuario.upsert({
            where: { usuarioId_moduloId: { usuarioId, moduloId } },
            update: { completado: true, puntaje },
            create: { usuarioId, moduloId, completado: true, puntaje, desbloqueadoEn: new Date() },
        });
        await this.verificarInsignias(usuarioId, puntaje);
    }
    async verificarInsignias(usuarioId, puntaje) {
        const completados = await this.prisma.progresoUsuario.count({
            where: { usuarioId, completado: true },
        });
        const insignias = await this.prisma.insignia.findMany();
        const insigniasUsuario = await this.prisma.insigniaUsuario.findMany({ where: { usuarioId } });
        const ganadas = new Set(insigniasUsuario.map((iu) => iu.insigniaId));
        const totalModulos = await this.prisma.modulo.count({ where: { activo: true } });
        for (const insignia of insignias) {
            if (ganadas.has(insignia.id))
                continue;
            let debeGanar = false;
            if (insignia.nombre === 'Primer módulo completado' && completados >= 1)
                debeGanar = true;
            if (insignia.nombre === '3 módulos completados' && completados >= 3)
                debeGanar = true;
            if (insignia.nombre === 'Todos los módulos básicos completados' && completados >= totalModulos)
                debeGanar = true;
            if (insignia.nombre === 'Puntaje perfecto en evaluación' && puntaje === 100)
                debeGanar = true;
            if (debeGanar) {
                await this.prisma.insigniaUsuario.create({ data: { usuarioId, insigniaId: insignia.id } });
            }
        }
    }
};
exports.EvaluacionesService = EvaluacionesService;
exports.EvaluacionesService = EvaluacionesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EvaluacionesService);
//# sourceMappingURL=evaluaciones.service.js.map