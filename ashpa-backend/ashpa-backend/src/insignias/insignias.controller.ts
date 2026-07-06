import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { InsigniasService } from './insignias.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('insignias')
export class InsigniasController {
  constructor(private insigniasService: InsigniasService) {}

  @Get('me')
  misInsignias(@Request() req) {
    return this.insigniasService.misInsignias(req.user.id);
  }
}
