import { EjerciciosService } from './ejercicios.service';
export declare class EjerciciosController {
    private ejerciciosService;
    constructor(ejerciciosService: EjerciciosService);
    listarPorModulo(moduloId: string): Promise<{
        id: string;
        moduloId: string;
        tipo: string;
        pregunta: string;
        opciones: string[];
    }[]>;
}
