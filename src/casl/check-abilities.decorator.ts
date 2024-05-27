import { SetMetadata } from '@nestjs/common';

export const CHECK_ABILITY = 'check_ability';
export const CheckAbilities = (action: string, subject: any) =>
  SetMetadata(CHECK_ABILITY, { action, subject });