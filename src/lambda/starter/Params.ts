import { APIGatewayEvent, Handler } from 'aws-lambda'

export const handler: Handler = async (event: APIGatewayEvent) => {
  const { pathParameters, queryStringParameters, body: bodyString } = event

  const body = JSON.parse(bodyString ?? '{}')
  console.log('body', body)

  if (!pathParameters)
    return badRequest('No path parameters found')

  if (!queryStringParameters)
    return badRequest('No query string parameters found')

  if (!body?.message)
    return badRequest('No message in body 👽')

  if (!body?.friends || !Array.isArray(body.friends))
    return badRequest('No friends in body ??')

  return ok({
    message: 'Params Gotten!👌',
    params: {
      path: pathParameters,
      query: queryStringParameters,
      body: body
    }
  })
}

const ok = (body) => {
  return {
    statusCode: 200,
    body: JSON.stringify(body)
  }
}

const badRequest = (message) => {
  return {
    statusCode: 400,
    body: JSON.stringify({ message })
  }
}
