import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get() //get/users
  findAll(@Query('role') role?: 'INTERN') {
    return this.usersService.findAll(role);
  }

  @Get(':id') //get/users/:id
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Post() //post/users
  creat(@Body() user: {}) {
    return user;
  }

  @Patch(':id') //patch /users/:id
  updateOne(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  }

  @Delete(':id') //delete /users/:id
  delet(@Param('id') id: string) {
    return { id };
  }
}
