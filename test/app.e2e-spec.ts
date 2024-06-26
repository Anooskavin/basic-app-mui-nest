import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/create (POST)', () => {
    return request(app.getHttpServer())
      .post('/create')
      .send({
        "username" : "anooskavin",
        "password" : "Anoos"
      })
      .expect(201); 
  });

  it('/login (POST)', () => {
    return request(app.getHttpServer())
      .post('/login')
      .send({
        "username" : "anooskavin",
        "password" : "Anoos"
      })
      .expect(201); 
  });
});
