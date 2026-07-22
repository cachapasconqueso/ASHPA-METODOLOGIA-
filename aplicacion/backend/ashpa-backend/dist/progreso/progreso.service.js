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
exports.ProgresoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const roles_constants_1 = require("../auth/roles.constants");
const INCLUDE_MODULO = {
    modulo: { select: { id: true, nombre: true, orden: true, nivel: true, aulaId: true } },
};
let ProgresoService = class ProgresoService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async miProgreso(usuarioId) {
        return this.prisma.progresoUsuario.findMany({
            where: { usuarioId },
            include: INCLUDE_MODULO,
            orderBy: { modulo: { orden: 'asc' } },
        });
    }
    async progresoEstudiante(estudianteId, rolesSolicitante) {
        if (!rolesSolicitante.includes(roles_constants_1.ROLES.PROFESOR)) {
            throw new common_1.ForbiddenException('Solo los profesores pueden ver el progreso de otros estudiantes');
        }
        return this.prisma.progresoUsuario.findMany({
            where: { usuarioId: estudianteId },
            include: INCLUDE_MODULO,
            orderBy: { modulo: { orden: 'asc' } },
        });
    }
};
exports.ProgresoService = ProgresoService;
exports.ProgresoService = ProgresoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProgresoService);
//# sourceMappingURL=progreso.service.js.map