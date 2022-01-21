import { Controller, Get } from "@nestjs/common";
import { HelloS } from "./helle.s";

@Controller('hello')
export class HolleC {
  constructor(private readonly service: HelloS){ }

  @Get()
  getHello(): string{
    return this.service.getHello();
  }
}