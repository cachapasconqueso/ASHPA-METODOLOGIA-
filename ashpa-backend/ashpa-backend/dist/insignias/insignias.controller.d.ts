import { InsigniasService } from './insignias.service';
export declare class InsigniasController {
    private insigniasService;
    constructor(insigniasService: InsigniasService);
    misInsignias(req: any): Promise<({
        insignia: {
            nombre: string;
            id: string;
            descripcion: string;
            moduloId: string | null;
            icono: string;
        };
    } & {
        id: string;
        usuarioId: string;
        insigniaId: string;
        ganadaEn: Date;
    })[]>;
}
