import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UsuarioDto } from './dto/usuario.dto';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUser() {
    return this.appService.getUser();
  }

  @Post()
  async postUser(@Body() UsuarioDto: UsuarioDto) {
    return this.appService.postUser(UsuarioDto);
  }

  @Post('/validador')
  getUserID(@Body() UsuarioDto: UsuarioDto) {
    return this.appService.getUserID(UsuarioDto.name, UsuarioDto.senha);
  }
}
