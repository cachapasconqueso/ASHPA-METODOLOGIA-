import { PrismaService } from '../prisma/prisma.service';
import { CrearAulaDto } from './dto/crear-aula.dto';
import { UnirseAulaDto } from './dto/unirse-aula.dto';
export declare class AulasService {
    private prisma;
    constructor(prisma: PrismaService);
    crear(profesorId: string, dto: CrearAulaDto): Promise<{
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
    misAulas(profesorId: string): Promise<({
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
    aulasInscritas(estudianteId: string): Promise<({
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
    unirse(estudianteId: string, dto: UnirseAulaDto): Promise<{
        mensaje: string;
        aula: {
            id: string;
            nombre: string;
        };
    }>;
    estudiantesDeAula(aulaId: string, profesorId: string): Promise<{
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
    private generarCodigo;
}
