import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsController } from './events/events.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsModule } from './events/events.module';
import { AppJapanService } from './events/app.japan.service';
import {AppDummy} from "./events/app.dummy";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
      ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Event],
      synchronize: true
    ),

    EventsModule,
  ],
  controllers: [AppController, EventsController],
  providers: [
    {
      Provide: AppService,
      userClass: AppJapanService,
    },
    {
      provide: 'APP_NAME',
      useValue: 'Nest Events Backend!',
    },
    {
      provide: 'MESSAGE',
      inject: [AppDummy],
      useFactory: (app) =>  `${app.dummy()} Factory!`
    }, AppDummy],
})
export class AppModule {}
