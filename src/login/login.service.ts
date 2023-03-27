import { Injectable } from '@nestjs/common';
import * as usuarios from '../db/usuario.json';
import { Usuario } from '../interfaces/usuario.interface';


@Injectable()
export class LoginService {
  constructor(

    ) {}
  config = usuarios;
  delete(id: string) {
    throw new Error('Method not implemented.');
  }
  findOne(id: string): any {
    throw new Error('Method not implemented.');
  }
  findAll() {
    return this.config;
  }
  create(usuario: Usuario) {
    let retorno;
    if (
      usuario.name === '' ||
      usuario.email === '' ||
      usuario.telefone === '' ||
      usuario.senha === '' ||
      usuario.cnpj === ''
    ) {
      retorno = 'false';
    } else {
      this.config.push(usuario);
      retorno = 'true';
    }

    return retorno;
  }
  

  
}