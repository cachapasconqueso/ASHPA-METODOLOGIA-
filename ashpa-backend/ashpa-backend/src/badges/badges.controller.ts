import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { BadgesService } from './badges.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('badges')
export class BadgesController {
  constructor(private badgesService: BadgesService) {}

  @Get('me')
  getMyBadges(@Request() req) {
    return this.badgesService.getMyBadges(req.user.id);
  }
}
