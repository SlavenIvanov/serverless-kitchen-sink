# Serverless Kitchen Sink Example
This project serves to illustrate the most common use cases in serverless framework

## Table of Contents
1. [Talking Points](#talking-points)
2. [Running the project](#running-the-project)
3. [Honorable mentions](#honorable-mentions)
4. [Resources](#resources)


## Talking points
1. Growy Node.js use case.
2. Cloud Stack:
    - AWS
    - Node.js 16+
    - TypeScript
    - Serverless
    - Webpack
    - Jest
    - Dynamo
    - Postgres
    - Prisma
    - Prettier (also eslint)
3. Example Project
    1. Hello World
    2. Structure
    3. TypeScript with Webpack setup, sls plugins
    4. TS HelloWorld
    5. Passing Parameters
    6. Handyman: runtime validation, transformation, error handling
    7. DynamoDB
        1. Setup
        2. Local DynamoDB, plugin, migrate, seed
        3. CRUD
        4. IAM and Auth...
    8. Debugging
    9. Lambda Triggers: Gateway, S3, Dynamo, Cron...
    10. Testing
        1. Hello-World
        2. AddNodeEnjoyer, mocking
    11. Stages: dev, test, prod
    12. Env variables, ssm
    13. Deployment
    14. Questions...


## Running the project

### Prerequisites:
- Node.js v16+
- npm
- Java Runtime Engine 6.x or newer (for local DynamoDB)

### Installation
1. Install Node dependencies
```shell
npm install
```
2. Install local dynamo dependencies
```shell
sls dynamodb install
```
P.S: If you get a 403 when running above command. It's a known, pending [issue](https://github.com/99x/serverless-dynamodb-local/issues/209) and the fix is 3 lines of code in edited in `node_modules/dynamodb-localhost` [here](https://github.com/99x/dynamodb-localhost/pull/78/files)

### Starting the local server
1. Run:
```shell
npm run sls-offline
```
2. Call any of the endpoints via Postman(`requests/postman.json`)/Curl

### Testing
```shell
npm run test
```

### Deploying
Deploy to dev environment
```shell
sls deploy --stage dev
```
Deploy to prod environment
```shell
sls deploy --stage prod
```

### Undeploying
Clearing up AWS sls resources when not in use:
 ```shell
serverless remove
```


## Honorable mentions
1. [AWSume](https://awsu.me/): easily switch between multiple AWS profiles
2. [nvm](https://github.com/nvm-sh/nvm): Use different versions of node in different projects
3. [NoSQL Workbench for DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/workbench.html): DynamoDB database explorer


## Resources
1. Postman requests -> `TODO`
2. Serverless [getting started](https://www.serverless.com/framework/docs/getting-started) guide
3. [Serverless yaml reference](https://www.serverless.com/framework/docs/providers/aws/guide/serverless.yml/)
3. [Serverless plugins](https://www.serverless.com/plugins/)
4. [Different ways to invoke Lambda Functions(Triggers)](https://aws.amazon.com/blogs/architecture/understanding-the-different-ways-to-invoke-lambda-functions/)
5. [Lambda IAM Permissions](https://www.serverless.com/framework/docs/providers/aws/guide/iam)
6. [Serverless Variables](https://www.serverless.com/framework/docs/providers/aws/guide/variables/)
7. [AWS SDK for JS v3](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/)
