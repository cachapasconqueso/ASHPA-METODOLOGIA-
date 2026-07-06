import { EvaluacionesService } from './evaluaciones.service';
import { IntentoDto } from './dto/intento.dto';
export declare class EvaluacionesController {
    private evaluacionesService;
    constructor(evaluacionesService: EvaluacionesService);
    obtenerPorModulo(moduloId: string): Promise<{
        id: string;
        moduloId: string;
        puntajeMinimo: number;
        preguntas: {
            id: string;
            pregunta: string;
            opciones: string[];
            evaluacionId: string;
        }[];
    }>;
    registrarIntento(moduloId: string, dto: IntentoDto, req: any): Promise<{
        puntaje: number;
        aprobado: boolean;
        correctas: number;
        total: number;
        id: string;
        creadoEn: Date;
        usuarioId: string;
        evaluacionId: string;
    }>;
}
