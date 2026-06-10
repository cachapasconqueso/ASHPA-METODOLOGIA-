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
const users_module_1 = require("./users/users.module");
const modules_module_1 = require("./modules/modules.module");
const exercises_module_1 = require("./exercises/exercises.module");
const evaluations_module_1 = require("./evaluations/evaluations.module");
const progress_module_1 = require("./progress/progress.module");
const teacher_module_1 = require("./teacher/teacher.module");
const badges_module_1 = require("./badges/badges.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            prisma_module_1.PrismaModule,
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            modules_module_1.ModulesModule,
            exercises_module_1.ExercisesModule,
            evaluations_module_1.EvaluationsModule,
            progress_module_1.ProgressModule,
            teacher_module_1.TeacherModule,
            badges_module_1.BadgesModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map