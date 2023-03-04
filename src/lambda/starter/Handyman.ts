import 'reflect-metadata'
import { Body, Handler, ok, Paths, Queries } from 'aws-lambda-handyman'
import { ArrayMinSize, IsArray, IsNotEmpty } from 'class-validator'

class Path {
  @IsNotEmpty()
  pathParamOne: string
}

class Query {
  @IsNotEmpty()
  queryOne: string
}

class BodyType {
  @IsNotEmpty()
  message: string
  @IsArray()
  // @ArrayMinSize(1)
  friends: string[]
}

class Handyman {
  @Handler()
  static async handle(@Paths() path: Path, @Queries() query: Query, @Body() body: BodyType) {
    return ok({
      message: 'That was easy 👌',
      params: { path, query, body }
    })
  }
}

export const handler = Handyman.handle
