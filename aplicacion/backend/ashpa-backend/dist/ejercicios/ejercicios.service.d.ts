import { PrismaService } from '../prisma/prisma.service';
export declare class EjerciciosService {
    private prisma;
    constructor(prisma: PrismaService);
    listarPorModulo(moduloId: string): Promise<{
        id: string;
        moduloId: string;
        tipo: string;
        pregunta: string;
        opciones: string[];
    }[]>;
}
