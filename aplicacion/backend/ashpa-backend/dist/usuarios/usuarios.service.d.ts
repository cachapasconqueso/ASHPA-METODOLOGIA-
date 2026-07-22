import { PrismaService } from '../prisma/prisma.service';
import { ActualizarUsuarioDto } from './dto/actualizar-usuario.dto';
export declare class UsuariosService {
    private prisma;
    constructor(prisma: PrismaService);
    listar(): Promise<{
        roles: string[];
        nombre: string;
        email: string;
        id: string;
        creadoEn: Date;
    }[]>;
    obtener(id: string): Promise<{
        roles: string[];
        nombre: string;
        email: string;
        id: string;
        creadoEn: Date;
    }>;
    actualizar(id: string, dto: ActualizarUsuarioDto, solicitanteId: string): Promise<{
        roles: string[];
        nombre: string;
        email: string;
        id: string;
        creadoEn: Date;
    }>;
}
