import 'reflect-metadata';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Test } from '@nestjs/testing';
import { documentSchema } from '../../src/schemas/document.schema';

describe('options.models.ts', () => {
  it('should work for a swagger document without document.info', async () => {
    const module = await Test.createTestingModule({}).compile();
    const app = module.createNestApplication();
    const swaggerDoc = SwaggerModule.createDocument(app, {} as any);
    expect(documentSchema(swaggerDoc)).toBeTruthy();
  });
  it('should work for a swagger document with document.info.title', async () => {
    const module = await Test.createTestingModule({}).compile();
    const app = module.createNestApplication();
    const document = new DocumentBuilder().setTitle('a title').build();
    const swaggerDoc = SwaggerModule.createDocument(app, document);
    expect(documentSchema(swaggerDoc)).toBeTruthy();
  });
});
