
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AtorDocument = HydratedDocument<Ator>;

@Schema()
export class Ator {
  @Prop()
  name: string;

  @Prop()
  senha: string;

  @Prop()
  email: string;

  @Prop()
  telefone: string;

  @Prop()
  cnpj: string;

  @Prop()
  tipo: string;

  @Prop()
  lat: string;

  @Prop()
  long: string;

  @Prop()
  photo: string;
}

export const AtorSchema = SchemaFactory.createForClass(Ator);