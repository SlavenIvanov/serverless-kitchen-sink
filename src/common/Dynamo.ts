import { dynamoClient as dynamo } from './DynamoClient'
import { PutCommand, ScanCommand } from '@aws-sdk/lib-dynamodb'
import * as crypto from 'crypto'

export async function getNodeEnjoyers() {
  const result = await dynamo.send(new ScanCommand({
    TableName: 'NodeEnjoyersTable'
  }))

  return result.Items
}

export async function addNodeEnjoyer(nodeEnjoyer: { name: string, email: string }) {
  return dynamo.send(new PutCommand({
    TableName: 'NodeEnjoyersTable',
    Item: {
      id: crypto.randomUUID(),
      ...nodeEnjoyer
    }
  }))
}
