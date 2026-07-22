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
exports.AulasController = void 0;
const common_1 = require("@nestjs/common");
const aulas_service_1 = require("./aulas.service");
const crear_aula_dto_1 = require("./dto/crear-aula.dto");
const unirse_aula_dto_1 = require("./dto/unirse-aula.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const roles_guard_1 = require("../auth/roles.guard");
const roles_decorator_1 = require("../auth/roles.decorator");
const roles_constants_1 = require("../auth/roles.constants");
let AulasController = class AulasController {
    aulasService;
    constructor(aulasService) {
        this.aulasService = aulasService;
    }
    crear(req, dto) {
        return this.aulasService.crear(req.user.id, dto);
    }
    misAulas(req) {
        return this.aulasService.misAulas(req.user.id);
    }
    estudiantesDeAula(id, req) {
        return this.aulasService.estudiantesDeAula(id, req.user.id);
    }
    unirse(req, dto) {
        return this.aulasService.unirse(req.user.id, dto);
    }
    aulasInscritas(req) {
        return this.aulasService.aulasInscritas(req.user.id);
    }
};
exports.AulasController = AulasController;
__decorate([
    (0, roles_decorator_1.Roles)(roles_constants_1.ROLES.PROFESOR),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, crear_aula_dto_1.CrearAulaDto]),
    __metadata("design:returntype", void 0)
], AulasController.prototype, "crear", null);
__decorate([
    (0, roles_decorator_1.Roles)(roles_constants_1.ROLES.PROFESOR),
    (0, common_1.Get)('mias'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AulasController.prototype, "misAulas", null);
__decorate([
    (0, roles_decorator_1.Roles)(roles_constants_1.ROLES.PROFESOR),
    (0, common_1.Get)(':id/estudiantes'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AulasController.prototype, "estudiantesDeAula", null);
__decorate([
    (0, common_1.Post)('unirse'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, unirse_aula_dto_1.UnirseAulaDto]),
    __metadata("design:returntype", void 0)
], AulasController.prototype, "unirse", null);
__decorate([
    (0, common_1.Get)('inscritas'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AulasController.prototype, "aulasInscritas", null);
exports.AulasController = AulasController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('aulas'),
    __metadata("design:paramtypes", [aulas_service_1.AulasService])
], AulasController);
//# sourceMappingURL=aulas.controller.js.map