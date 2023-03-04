import { APIGatewayEvent, Handler, Context } from 'aws-lambda'

export const handler: Handler = async (event: APIGatewayEvent, context: Context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello Serverless! 👌👽' })
  }
}
