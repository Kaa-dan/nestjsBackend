import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get() //get/users
  findAll() {
    return [];
  }

  @Get(':id') //get/users/:id
  findOne(@Param('id') id: string) {
    return { id };
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
