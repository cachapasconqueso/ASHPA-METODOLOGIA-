import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(dto: RegisterDto): Promise<{
        aula: {
            id: string;
            nombre: string;
            codigo: string;
        };
        access_token: string;
        usuario: {
            roles: string[];
            id: string;
            email: string;
        };
    }>;
    login(dto: LoginDto): Promise<{
        access_token: string;
        usuario: {
            roles: string[];
            id: string;
            email: string;
        };
    }>;
    getMe(req: any): any;
}
