import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AtorsModule } from './ator/ator.module';

@Module({
  imports: [
   // MongooseModule.forRoot('mongodb://localhost:27017/solicity'),
   // AtorsModule
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
