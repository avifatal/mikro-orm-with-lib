import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {loadMikroOrm} from "@common/lib/dist";
import {UserEntity} from "./user.entity";

@Module({
  imports: [loadMikroOrm([UserEntity])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
