import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UseFilters, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { QueryFailedFilter } from 'src/query-failed.filter';
import { AbilitiesGuard } from 'src/casl/abilities.guard';
import { CheckAbilities } from 'src/casl/check-abilities.decorator';
import { Action } from 'src/casl/Action'
import { User } from './entities/user.entity';
// import { AuthGuard } from '@nestjs/passport';


@Controller('user')
@UseFilters( QueryFailedFilter)
@UseGuards(AbilitiesGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @CheckAbilities(Action.Create, 'all')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  // @UseGuards(AuthGuard('jwt'))
  @Get()
  @CheckAbilities(Action.Read, 'all')
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @CheckAbilities(Action.Read, 'all')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  @CheckAbilities(Action.Update, User)
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @CheckAbilities(Action.Delete, User)
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
