import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsController } from './ator.controller';
import { AtorsService } from './ator.service';
import { Ator, AtorSchema } from './schemas/ator.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Ator.name, schema: AtorSchema }])
],
  controllers: [CatsController],
  providers: [AtorsService],
})
export class AtorsModule {}