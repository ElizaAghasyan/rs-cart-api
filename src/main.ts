import { NestFactory } from '@nestjs/core';

import * as helmet from 'helmet';

import { AppModule } from './app.module';
import { Handler } from 'aws-lambda';
import  ServerlessAdapter  from '@vendia/serverless-express';
import { createConnection } from "typeorm";

createConnection({
  type: "postgres",
  host: process.env.HOST,
  port: parseInt(process.env.PORT), // convert string to number
  username: process.env.USER_NAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [],
  synchronize: true,
// eslint-disable-next-line @typescript-eslint/no-empty-function
}).then(connection => {
}).catch(error => console.log(error));

const port = process.env.PORT || 4000;
let server: Handler;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: (req, callback) => callback(null, true),
  });
  app.use(helmet());
  server = ServerlessAdapter(app.getHttpAdapter().getInstance());
  
  
  await app.listen(port);
}

export const lambdaHandler: Handler = async (event, context, callback) => {
  if (!server) {
    await bootstrap();
  }
  return server(event, context, callback);
};

bootstrap().then(() => {
  console.log('App is running on %s port', port);
});
