import { Controller, Get } from "@nestjs/common";
import { HelloService } from "./helle.s";

@Controller()
export class HolleController {
  constructor(private readonly helloService: HelloService){ }

  @Get()
  getHello(): string{
    return this.helloService.getHello();
  }
}