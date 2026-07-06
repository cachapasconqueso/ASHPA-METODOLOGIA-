import { ProgresoService } from './progreso.service';
export declare class ProgresoController {
    private progresoService;
    constructor(progresoService: ProgresoService);
    miProgreso(req: any): Promise<({
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
    progresoEstudiante(usuarioId: string, req: any): Promise<({
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
