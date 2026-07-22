import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
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
    getMe(usuario: any): any;
    private construirRespuesta;
    private signToken;
}
