import { UsuariosService } from './usuarios.service';
import { ActualizarUsuarioDto } from './dto/actualizar-usuario.dto';
export declare class UsuariosController {
    private usuariosService;
    constructor(usuariosService: UsuariosService);
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
    actualizar(id: string, dto: ActualizarUsuarioDto, req: any): Promise<{
        roles: string[];
        nombre: string;
        email: string;
        id: string;
        creadoEn: Date;
    }>;
}
