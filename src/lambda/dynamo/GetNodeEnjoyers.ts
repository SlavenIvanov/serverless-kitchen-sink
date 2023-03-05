import { ok } from 'aws-lambda-handyman'
import { getNodeEnjoyers } from '../../common/Dynamo'

export const handler = async () => {
  const enjoyers = await getNodeEnjoyers()

  console.log('Node enjoyers:', enjoyers)

  return ok(enjoyers)
}
