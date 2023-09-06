import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { SeederService } from './services/seeder/seeder.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const seeder = app.get(SeederService);

  const config = new DocumentBuilder()
    .setTitle('Ens docs')
    .setDescription('The API docs for Ens')
    .setVersion('1.0')
    .addTag('ens')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await seeder.seed();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
