import { Controller, Get, Post, Body } from "@nestjs/common";
import { HelloS } from "./hello.s";
import { HelloD } from './dto/hello'

@Controller('hello')
export class HolleC {
  constructor(private readonly service: HelloS){ }

  @Get()
  getHello(): string{
    return this.service.getHello();
  }

  @Post()
  postHello(@Body() hello: HelloD) {
    return hello;
  }
}