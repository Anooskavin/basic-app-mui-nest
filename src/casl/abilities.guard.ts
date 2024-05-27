import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { CHECK_ABILITY } from './check-abilities.decorator';
import { CaslAbilityFactory } from './casl-ability.factory/casl-ability.factory';
import { Action } from './Action';

@Injectable()
export class AbilitiesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private caslAbilityFactory: CaslAbilityFactory,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const abilityMetadata = this.reflector.get<{ action: Action; subject: any }>(
      CHECK_ABILITY,
      context.getHandler(),
    );

    if (!abilityMetadata) {
      return true;
    }

    const { action, subject } = abilityMetadata;
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const ability = this.caslAbilityFactory.defineAbilityFor(user);



    return ability.can(action, subject);
  }
}
