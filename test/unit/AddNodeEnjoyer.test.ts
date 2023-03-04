import { handler } from '../../src/lambda/dynamo/AddNodeEnjoyer'

const mockAddNodeEnjoyer = jest.fn()
jest.mock('../../src/common/Dynamo', () => ({
  addNodeEnjoyer: jest.fn().mockImplementation((args) => mockAddNodeEnjoyer(args))
}))

  test('AddNodeEnjoyer called with wrong parameters', async () => {
    // @ts-ignore
    const { statusCode, body } = await handler({ body: JSON.stringify({}) })

    expect(statusCode).toBe(400)
  })

  test('AddNodeEnjoyer called with right parameteres', async () => {
    mockAddNodeEnjoyer.mockResolvedValue({message:'Enjoyer added successfully ????'})
    const input = {name:'Slavi',email:'slav@ia.com'}

    // @ts-ignore
    const { statusCode } = await handler({ body: JSON.stringify(input) })

    expect(mockAddNodeEnjoyer).toHaveBeenCalledWith(input)
    expect(statusCode).toBe(200)
  })

