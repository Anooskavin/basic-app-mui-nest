import { Body, Controller, Get, Param, Post, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUser } from './dto/create-user.dto';
import { AuthService } from './auth/auth.service';
import { Public } from './auth/public.decorator';
import { AuthGuard } from '@nestjs/passport';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private authService: AuthService) {}

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


  // @UseGuards(AuthGuard('local'))
  @Public()
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async loginn(@Request() req) {
    return this.authService.login(req.body);
  }
  

  // @Get(':username')
  // findOne(@Param('username') username: string) {
  //   return `This action returns a #${username} user`;
  // }
}
