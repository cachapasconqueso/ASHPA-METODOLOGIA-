import { PrismaService } from '../prisma/prisma.service';
export declare class ProgresoService {
    private prisma;
    constructor(prisma: PrismaService);
    miProgreso(usuarioId: string): Promise<({
        modulo: {
            nombre: string;
            id: string;
            aulaId: string;
            nivel: number;
            orden: number;
        };
    } & {
        id: string;
        creadoEn: Date;
        usuarioId: string;
        moduloId: string;
        completado: boolean;
        puntaje: number | null;
        desbloqueadoEn: Date | null;
    })[]>;
    progresoEstudiante(estudianteId: string, rolesSolicitante: string[]): Promise<({
        modulo: {
            nombre: string;
            id: string;
            aulaId: string;
            nivel: number;
            orden: number;
        };
    } & {
        id: string;
        creadoEn: Date;
        usuarioId: string;
        moduloId: string;
        completado: boolean;
        puntaje: number | null;
        desbloqueadoEn: Date | null;
    })[]>;
}
