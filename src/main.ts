import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { RedocModule } from './redoc.module';
import { RedocOptions } from './interfaces/index';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('example')
    .setDescription('Example for redoc')
    .setContact('Cristian', '', 'devcristiansanchez@gmail.com')
    .setVersion('v1')
    .addServer('/v1/', 'v1')
    .addBearerAuth()
    .build();

  const path = '/documentation';

  const redocOptions: RedocOptions = {
    title: 'Kubide API skeleton documentation',
    tagGroups: [
      {
        name: 'Endpoints',
        tags: ['Users'],
      },
    ],
  };

  const document = SwaggerModule.createDocument(app, config);

  await RedocModule.setup(path, app, document, redocOptions);
  // SwaggerModule.setup(path, app, document);

  await app.listen(3000);
}

void bootstrap();
