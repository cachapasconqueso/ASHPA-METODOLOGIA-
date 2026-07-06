import { PrismaService } from '../prisma/prisma.service';
import { IntentoDto } from './dto/intento.dto';
export declare class EvaluacionesService {
    private prisma;
    constructor(prisma: PrismaService);
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
    registrarIntento(moduloId: string, usuarioId: string, dto: IntentoDto): Promise<{
        puntaje: number;
        aprobado: boolean;
        correctas: number;
        total: number;
        id: string;
        creadoEn: Date;
        usuarioId: string;
        evaluacionId: string;
    }>;
    private completarModulo;
    private verificarInsignias;
}
