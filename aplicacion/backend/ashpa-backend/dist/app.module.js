"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const prisma_module_1 = require("./prisma/prisma.module");
const auth_module_1 = require("./auth/auth.module");
const usuarios_module_1 = require("./usuarios/usuarios.module");
const aulas_module_1 = require("./aulas/aulas.module");
const modulos_module_1 = require("./modulos/modulos.module");
const ejercicios_module_1 = require("./ejercicios/ejercicios.module");
const evaluaciones_module_1 = require("./evaluaciones/evaluaciones.module");
const progreso_module_1 = require("./progreso/progreso.module");
const insignias_module_1 = require("./insignias/insignias.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            prisma_module_1.PrismaModule,
            auth_module_1.AuthModule,
            usuarios_module_1.UsuariosModule,
            aulas_module_1.AulasModule,
            modulos_module_1.ModulosModule,
            ejercicios_module_1.EjerciciosModule,
            evaluaciones_module_1.EvaluacionesModule,
            progreso_module_1.ProgresoModule,
            insignias_module_1.InsigniasModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map