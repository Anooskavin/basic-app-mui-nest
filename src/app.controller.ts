import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUser } from './dto/create-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/create')
  create(@Body() createUserDto: CreateUser ) {
    return this.appService.create(createUserDto);
  }

  @Post('/login')
  login(@Body() createUserDto: CreateUser ) {
    return this.appService.login(createUserDto);
  }

  // @Get(':username')
  // findOne(@Param('username') username: string) {
  //   return `This action returns a #${username} user`;
  // }
}
