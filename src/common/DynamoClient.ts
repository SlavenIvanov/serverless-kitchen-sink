import { DynamoDBClient, DynamoDBClientConfig } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb'

const config: DynamoDBClientConfig = {
  region: process.env.REGION
}

if (process.env.IS_OFFLINE) config.endpoint = 'http://localhost:8008'

const ddbClient = new DynamoDBClient(config)

export const dynamoClient = DynamoDBDocumentClient.from(ddbClient, {
  marshallOptions: {
    convertClassInstanceToMap: true,
    removeUndefinedValues: true
  }
})
