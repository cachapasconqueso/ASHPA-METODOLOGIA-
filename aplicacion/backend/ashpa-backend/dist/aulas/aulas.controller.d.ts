import { AulasService } from './aulas.service';
import { CrearAulaDto } from './dto/crear-aula.dto';
import { UnirseAulaDto } from './dto/unirse-aula.dto';
export declare class AulasController {
    private aulasService;
    constructor(aulasService: AulasService);
    crear(req: any, dto: CrearAulaDto): Promise<{
        _count: {
            estudiantes: number;
            modulos: number;
        };
    } & {
        id: string;
        nombre: string;
        codigo: string;
        creadoEn: Date;
        profesorId: string;
    }>;
    misAulas(req: any): Promise<({
        _count: {
            estudiantes: number;
            modulos: number;
        };
    } & {
        id: string;
        nombre: string;
        codigo: string;
        creadoEn: Date;
        profesorId: string;
    })[]>;
    estudiantesDeAula(id: string, req: any): Promise<{
        inscritoEn: Date;
        modulosCompletados: number;
        totalModulos: number;
        promedio: number;
        progreso: {
            moduloId: string;
            completado: boolean;
            puntaje: number | null;
        }[];
        id: string;
        nombre: string;
        email: string;
    }[]>;
    unirse(req: any, dto: UnirseAulaDto): Promise<{
        mensaje: string;
        aula: {
            id: string;
            nombre: string;
        };
    }>;
    aulasInscritas(req: any): Promise<({
        profesor: {
            id: string;
            nombre: string;
        };
        _count: {
            modulos: number;
        };
    } & {
        id: string;
        nombre: string;
        codigo: string;
        creadoEn: Date;
        profesorId: string;
    })[]>;
}
