import {  PureAbility, InferSubjects, AbilityBuilder, ExtractSubjectType, AbilityClass, createMongoAbility } from "@casl/ability";
import { User } from "src/user/entities/user.entity";
import { Action } from "../Action";

type Subjects = InferSubjects<typeof User> | 'all';

export type AppAbility = PureAbility<[Action, Subjects]>;

export class CaslAbilityFactory {
    defineAbilityFor(user: User): AppAbility {
      const { can, cannot, build } = new AbilityBuilder<PureAbility<[Action, Subjects]>>(
        // PureAbility as AbilityClass<AppAbility>,
        createMongoAbility
      );
  
      if (user.role === 'admin') {
        can(Action.Manage, 'all');

      } else {
        can(Action.Read, 'all');
        can(Action.Create, User);
        can(Action.Update, User, { id: user.userid });
        cannot(Action.Delete, User, { id: user.userid });
      }
  

      return build({
        detectSubjectType: (item) =>
          item.constructor as ExtractSubjectType<Subjects>,
      });
    }
  }
  

