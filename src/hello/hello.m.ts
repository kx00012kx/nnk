import { Module } from "@nestjs/common";
import { HelloS } from "./helle.s";
import { HolleC } from "./hello.c";

@Module({
  imports: [],
  controllers: [ HolleC ],
  providers: [ HelloS ]
})
export class HelloM{};
