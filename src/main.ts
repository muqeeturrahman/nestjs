import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder,SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config=new DocumentBuilder()
  .setTitle('Todos Api')
  .setDescription('The Todos Api Description')
  .setVersion("1.0")
  .build()
  const document=SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('api',app,document)
  // Global validation pipe with whitelist and transform
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(3000);
  console.log('Application running on: http://localhost:3000');
}
bootstrap();
