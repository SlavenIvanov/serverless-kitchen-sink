import { Body, Handler, ok } from 'aws-lambda-handyman'
import { IsEmail, IsString, MinLength } from 'class-validator'
import { addNodeEnjoyer } from '../../common/Dynamo'

class BodyType {
  @MinLength(3)
  @IsString()
  name: string
  @IsEmail()
  email: string
}

class AddNodeEnjoyer {
  @Handler()
  static async handle(@Body() enjoyer: BodyType) {
    await addNodeEnjoyer(enjoyer)

    return ok({ message: 'Enjoyer added successfully 👌🐸' })
  }
}

export const handler = AddNodeEnjoyer.handle
