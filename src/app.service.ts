import { Injectable } from '@nestjs/common';
import * as usuarios from './db/usuario.json';
import { Usuario } from './interfaces/usuario.interface';

@Injectable()
export class AppService {
  config = usuarios;
  resultado: boolean;
  getUser() {
    return this.config;
  }

  getUserID(name, senha) {
    for (let i = 0; i < this.config.length; i++) {
      if (name === this.config[i].name && senha === this.config[i].senha) {
        this.resultado = true;
        break;
      } else {
        this.resultado = false;
      }
    }
    return this.resultado;
  }

  postUser(usuario: Usuario) {
    this.config.push(usuario);
    return 'Usuario inserido';
  }
}
