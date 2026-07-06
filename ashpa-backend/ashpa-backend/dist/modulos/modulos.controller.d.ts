import { ModulosService } from './modulos.service';
import { CambiarActivoDto } from './dto/cambiar-activo.dto';
export declare class ModulosController {
    private modulosService;
    constructor(modulosService: ModulosService);
    listarPorAula(aulaId: string, req: any): Promise<{
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
    cambiarActivo(id: string, dto: CambiarActivoDto, req: any): Promise<{
        id: string;
        nombre: string;
        activo: boolean;
    }>;
}
