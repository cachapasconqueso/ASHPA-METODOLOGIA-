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
exports.AulasService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const modulos_quichua_1 = require("../catalogo/modulos-quichua");
let AulasService = class AulasService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async crear(profesorId, dto) {
        for (let intento = 0; intento < 5; intento++) {
            const codigo = this.generarCodigo();
            try {
                return await this.prisma.aula.create({
                    data: {
                        nombre: dto.nombre,
                        codigo,
                        profesorId,
                        modulos: {
                            create: modulos_quichua_1.CATALOGO_MODULOS.map((m) => ({
                                nombre: m.nombre,
                                descripcion: m.descripcion,
                                nivel: m.nivel,
                                orden: m.orden,
                                activo: m.orden === 1,
                                ejercicios: { create: m.ejercicios },
                                evaluacion: {
                                    create: { puntajeMinimo: 70, preguntas: { create: m.evalPreguntas } },
                                },
                            })),
                        },
                    },
                    include: { _count: { select: { estudiantes: true, modulos: true } } },
                });
            }
            catch (e) {
                if (e?.code === 'P2002')
                    continue;
                throw e;
            }
        }
        throw new common_1.InternalServerErrorException('No se pudo generar un código de aula único, intenta de nuevo');
    }
    async misAulas(profesorId) {
        return this.prisma.aula.findMany({
            where: { profesorId },
            orderBy: { creadoEn: 'desc' },
            include: { _count: { select: { estudiantes: true, modulos: true } } },
        });
    }
    async aulasInscritas(estudianteId) {
        return this.prisma.aula.findMany({
            where: { estudiantes: { some: { estudianteId } } },
            orderBy: { creadoEn: 'desc' },
            include: {
                profesor: { select: { id: true, nombre: true } },
                _count: { select: { modulos: true } },
            },
        });
    }
    async unirse(estudianteId, dto) {
        const aula = await this.prisma.aula.findUnique({ where: { codigo: dto.codigo } });
        if (!aula)
            throw new common_1.NotFoundException('No existe un aula con ese código');
        try {
            await this.prisma.aulaEstudiante.create({
                data: { aulaId: aula.id, estudianteId },
            });
        }
        catch (e) {
            if (e?.code === 'P2002') {
                throw new common_1.ConflictException('Ya estás inscrito en esta aula');
            }
            throw e;
        }
        return { mensaje: 'Inscripción exitosa', aula: { id: aula.id, nombre: aula.nombre } };
    }
    async estudiantesDeAula(aulaId, profesorId) {
        const aula = await this.prisma.aula.findFirst({ where: { id: aulaId, profesorId } });
        if (!aula)
            throw new common_1.NotFoundException('Aula no encontrada');
        const modulos = await this.prisma.modulo.findMany({ where: { aulaId }, select: { id: true } });
        const moduloIds = modulos.map((m) => m.id);
        const inscripciones = await this.prisma.aulaEstudiante.findMany({
            where: { aulaId },
            include: { estudiante: { select: { id: true, nombre: true, email: true } } },
            orderBy: { inscritoEn: 'asc' },
        });
        const estudianteIds = inscripciones.map((i) => i.estudianteId);
        const progreso = moduloIds.length && estudianteIds.length
            ? await this.prisma.progresoUsuario.findMany({
                where: { moduloId: { in: moduloIds }, usuarioId: { in: estudianteIds } },
            })
            : [];
        return inscripciones.map((i) => {
            const suyo = progreso.filter((p) => p.usuarioId === i.estudianteId);
            const modulosCompletados = suyo.filter((p) => p.completado).length;
            const promedio = suyo.length
                ? Math.round(suyo.reduce((a, p) => a + (p.puntaje ?? 0), 0) / suyo.length)
                : 0;
            return {
                ...i.estudiante,
                inscritoEn: i.inscritoEn,
                modulosCompletados,
                totalModulos: moduloIds.length,
                promedio,
                progreso: suyo.map((p) => ({ moduloId: p.moduloId, completado: p.completado, puntaje: p.puntaje })),
            };
        });
    }
    generarCodigo() {
        const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
        let codigo = '';
        for (let i = 0; i < 6; i++) {
            codigo += chars[Math.floor(Math.random() * chars.length)];
        }
        return codigo;
    }
};
exports.AulasService = AulasService;
exports.AulasService = AulasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AulasService);
//# sourceMappingURL=aulas.service.js.map