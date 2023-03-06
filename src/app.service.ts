import { Injectable } from '@nestjs/common';
import * as usuarios from './db/usuario.json';
import { Usuario } from './interfaces/usuario.interface';

@Injectable()
export class AppService {
  config = usuarios;

  getUser() {
    return this.config;
  }

  postUser(usuario: Usuario): void {
    this.config.push(usuario);
  }
}
