import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { dataSourceOptions } from './data-source';
import { AuthModule } from './auth/auth.module';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { QueryFailedFilter } from './query-failed.filter';
import { AuthGuard } from './auth/auth.guard';
import { CaslModule } from './casl/casl.module';
import { AbilitiesGuard } from './casl/abilities.guard';
import { CaslAbilityFactory } from './casl/casl-ability.factory/casl-ability.factory';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    UserModule,
    AuthModule,
    CaslModule
  ],
  controllers: [AppController],
  providers: [AppService,

    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    AbilitiesGuard,
    
    
  ],
})
export class AppModule {}
