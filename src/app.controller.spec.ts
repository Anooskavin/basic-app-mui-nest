import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreateUser } from './dto/create-user.dto';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });

    it('should create User', () => {
       const User = { 
                      "username" : "anooskavin",
                      "password" : "Anoos" 
                    }
      expect(appController.create(User)).toBe('success');
    });

    it('should login User', () => {
      const User = { 
                     "username" : "anooskavin",
                     "password" : "Anoos" 
                   }
     expect(appController.login(User)).toEqual({"message": "Username Not Found", "status": 401});
   });
  });
});
