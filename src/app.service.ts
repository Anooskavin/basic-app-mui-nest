import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateUser } from './dto/create-user.dto';
import { METHODS } from 'http';




@Injectable()
export class AppService {
  

   Users = {}
  
  create(createUserDto : CreateUser) : string  {
    this.Users[createUserDto.username] = createUserDto.password;
    console.log(this.Users)
    return "success";
  }


  getHello(): string {
    return 'Hello World!';
  }

  login(createUserDto: CreateUser) {
    if(this.Users[createUserDto.username])
    {
      if(this.Users[createUserDto.username] === createUserDto.password){
        return { status: HttpStatus.OK, message: 'Login successful' };
      }
      else{
        return { status: HttpStatus.UNAUTHORIZED, message: 'Invalid password' };
      }
    }
    return { status: HttpStatus.UNAUTHORIZED, message: 'Username Not Found' };
  }


}

