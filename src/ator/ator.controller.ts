import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AtorsService } from './ator.service';
import { UsuarioDto } from './dto/usuario.dto';
import { Ator } from './schemas/ator.schema';

@Controller('ator')
export class CatsController {
  constructor(private readonly atorsService: AtorsService) {}

  @Post()
  async create(@Body() usuarioDto: UsuarioDto) {
    await this.atorsService.create(usuarioDto);
  }

  @Get()
  async findAll(): Promise<Ator[]> {
    return this.atorsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Ator> {
    return this.atorsService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.atorsService.delete(id);
  }
}