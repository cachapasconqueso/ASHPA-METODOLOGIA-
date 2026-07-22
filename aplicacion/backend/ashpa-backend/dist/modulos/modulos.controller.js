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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModulosController = void 0;
const common_1 = require("@nestjs/common");
const modulos_service_1 = require("./modulos.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const roles_guard_1 = require("../auth/roles.guard");
const roles_decorator_1 = require("../auth/roles.decorator");
const roles_constants_1 = require("../auth/roles.constants");
const cambiar_activo_dto_1 = require("./dto/cambiar-activo.dto");
let ModulosController = class ModulosController {
    modulosService;
    constructor(modulosService) {
        this.modulosService = modulosService;
    }
    listarPorAula(aulaId, req) {
        return this.modulosService.listarPorAula(aulaId, req.user.id);
    }
    obtener(id) {
        return this.modulosService.obtener(id);
    }
    cambiarActivo(id, dto, req) {
        return this.modulosService.cambiarActivo(id, req.user.id, dto.activo);
    }
};
exports.ModulosController = ModulosController;
__decorate([
    (0, common_1.Get)('aula/:aulaId'),
    __param(0, (0, common_1.Param)('aulaId')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ModulosController.prototype, "listarPorAula", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ModulosController.prototype, "obtener", null);
__decorate([
    (0, roles_decorator_1.Roles)(roles_constants_1.ROLES.PROFESOR),
    (0, common_1.Patch)(':id/activo'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, cambiar_activo_dto_1.CambiarActivoDto, Object]),
    __metadata("design:returntype", void 0)
], ModulosController.prototype, "cambiarActivo", null);
exports.ModulosController = ModulosController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('modulos'),
    __metadata("design:paramtypes", [modulos_service_1.ModulosService])
], ModulosController);
//# sourceMappingURL=modulos.controller.js.map