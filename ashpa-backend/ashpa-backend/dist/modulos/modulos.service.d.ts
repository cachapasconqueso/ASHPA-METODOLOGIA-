import { PrismaService } from '../prisma/prisma.service';
export declare class ModulosService {
    private prisma;
    constructor(prisma: PrismaService);
    listarPorAula(aulaId: string, usuarioId: string): Promise<{
        habilitado: boolean;
        progreso: {
            id: string;
            creadoEn: Date;
            moduloId: string;
            completado: boolean;
            puntaje: number | null;
            desbloqueadoEn: Date | null;
            usuarioId: string;
        } | null;
        completado: boolean;
        _count: {
            ejercicios: number;
        };
        id: string;
        nombre: string;
        descripcion: string;
        nivel: number;
        orden: number;
        activo: boolean;
        aulaId: string;
    }[]>;
    obtener(id: string): Promise<{
        ejercicios: {
            id: string;
            tipo: string;
            pregunta: string;
            opciones: string[];
            moduloId: string;
        }[];
        evaluacion: {
            id: string;
            moduloId: string;
            puntajeMinimo: number;
            preguntas: {
                id: string;
                pregunta: string;
                opciones: string[];
                evaluacionId: string;
            }[];
        } | null;
    } & {
        id: string;
        nombre: string;
        descripcion: string;
        nivel: number;
        orden: number;
        activo: boolean;
        aulaId: string;
    }>;
    cambiarActivo(moduloId: string, profesorId: string, activo: boolean): Promise<{
        id: string;
        nombre: string;
        activo: boolean;
    }>;
}
