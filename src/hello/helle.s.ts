import { Injectable } from "@nestjs/common";

@Injectable()
export class HelloS {
  getHello(): string {
    return 'hello! hello!'
  }
}