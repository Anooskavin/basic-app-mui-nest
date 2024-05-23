import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { dataSourceOptions } from './data-source';
import { AuthModule } from './auth/auth.module';
import { APP_FILTER } from '@nestjs/core';
import { QueryFailedFilter } from './query-failed.filter';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    UserModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService,
    
  ],
})
export class AppModule {}
