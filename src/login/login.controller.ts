import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { UsuarioDto } from './dto/usuario.dto';

@Controller('ator')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  async create(@Body() usuarioDto: UsuarioDto) {
    await this.loginService.create(usuarioDto);
  }

  @Get()
  async findAll(){
    return this.loginService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.loginService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.loginService.delete(id);
  }
}