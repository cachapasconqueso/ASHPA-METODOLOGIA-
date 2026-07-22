import { SetMetadata } from '@nestjs/common';
import { NombreRol } from './roles.constants';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: NombreRol[]) => SetMetadata(ROLES_KEY, roles);
