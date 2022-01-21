import { IsNotIn, isNotIn, MinLength } from "class-validator";

export class HelloD {

  @IsNotIn(['', undefined, null], {message: 'accent not allow enpty'})
  name: string;

  @MinLength(6, {
    message: 'min length 6'
  })
  password: string;
  
}


