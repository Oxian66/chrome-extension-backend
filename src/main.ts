import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    allowedHeaders: ['content-type'],
    origin: 'chrome-extension://nehnhnookfbaeailmilkejgfdejagmie',
    credentials: true,
  });
  await app.listen(3001);
}
bootstrap();
