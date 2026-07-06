import { PrismaService } from '../prisma/prisma.service';
export declare class InsigniasService {
    private prisma;
    constructor(prisma: PrismaService);
    misInsignias(usuarioId: string): Promise<({
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
