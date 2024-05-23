import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>,)
  {}


  async create(createUserDto: CreateUserDto) {
    
    const user: User = new User();
    
    user.username = createUserDto.username;
    user.password = createUserDto.password;

    await this.userRepository.save(user)

    return { status: HttpStatus.OK, message: 'User Created Successfully' };

  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(userid: number) {
    return this.userRepository.findOneBy({userid});
  }

  update(id: number, updateUserDto: UpdateUserDto) {

    const user: User = new User();
    
    user.username = updateUserDto.username;
    user.password = updateUserDto.password;
    user.userid = id;

    this.userRepository.save(user)

    return { status: HttpStatus.OK, message: 'User Updated Successfully' };
  }

  remove(userid: number) {

    this.userRepository.delete({userid})

    return { status: HttpStatus.OK, message: 'User Removed Successfully' };
  }
}
