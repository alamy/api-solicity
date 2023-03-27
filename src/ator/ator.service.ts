import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UsuarioDto } from './dto/usuario.dto';
import { Ator, AtorDocument } from './schemas/ator.schema';

@Injectable()
export class AtorsService {
  constructor(
    @InjectModel(Ator.name) private readonly catModel: Model<AtorDocument>,
  ) {}

  async create(createUsuarioDto: UsuarioDto): Promise<Ator> {
    const createdAtor = await this.catModel.create(createUsuarioDto);
    return createdAtor;
  }

  async findAll(): Promise<Ator[]> {
    return this.catModel.find().exec();
  }

  async findOne(id: string): Promise<Ator> {
    return this.catModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    const deletedUsuarioDto = await this.catModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedUsuarioDto;
  }
}