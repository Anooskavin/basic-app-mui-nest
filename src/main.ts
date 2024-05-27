import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { QueryFailedFilter } from './query-failed.filter';
import { AuthGuard } from './auth/auth.guard';


async function bootstrap() {
  const app = await NestFactory.create(AppModule,{ cors: true });

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new QueryFailedFilter());
  
  

  await app.listen(3001);
}
bootstrap();
