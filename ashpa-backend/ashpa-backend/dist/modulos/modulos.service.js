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
exports.ModulosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ModulosService = class ModulosService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async listarPorAula(aulaId, usuarioId) {
        const modulos = await this.prisma.modulo.findMany({
            where: { aulaId },
            orderBy: { orden: 'asc' },
            include: { _count: { select: { ejercicios: true } } },
        });
        const progresoRegistros = await this.prisma.progresoUsuario.findMany({
            where: { usuarioId },
        });
        const progresoMap = new Map(progresoRegistros.map((p) => [p.moduloId, p]));
        return modulos.map((mod) => {
            const prog = progresoMap.get(mod.id);
            return {
                ...mod,
                habilitado: mod.activo,
                progreso: prog || null,
                completado: prog?.completado || false,
            };
        });
    }
    async obtener(id) {
        const mod = await this.prisma.modulo.findUnique({
            where: { id },
            include: {
                ejercicios: {
                    select: { id: true, moduloId: true, tipo: true, pregunta: true, opciones: true },
                },
                evaluacion: {
                    select: {
                        id: true,
                        moduloId: true,
                        puntajeMinimo: true,
                        preguntas: {
                            select: { id: true, evaluacionId: true, pregunta: true, opciones: true },
                            orderBy: { id: 'asc' },
                        },
                    },
                },
            },
        });
        if (!mod)
            throw new common_1.NotFoundException('Módulo no encontrado');
        return mod;
    }
    async cambiarActivo(moduloId, profesorId, activo) {
        const modulo = await this.prisma.modulo.findUnique({
            where: { id: moduloId },
            include: { aula: { select: { profesorId: true } } },
        });
        if (!modulo)
            throw new common_1.NotFoundException('Módulo no encontrado');
        if (modulo.aula.profesorId !== profesorId) {
            throw new common_1.ForbiddenException('No puedes modificar módulos de un aula que no es tuya');
        }
        return this.prisma.modulo.update({
            where: { id: moduloId },
            data: { activo },
            select: { id: true, nombre: true, activo: true },
        });
    }
};
exports.ModulosService = ModulosService;
exports.ModulosService = ModulosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ModulosService);
//# sourceMappingURL=modulos.service.js.map