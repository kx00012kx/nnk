import { Module } from '@nestjs/common';
import { HelloM } from './hello/hello.m';


@Module({
  imports: [HelloM],
  controllers: [],
  providers: [],
})
export class AppModule {}
