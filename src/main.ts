import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 30001;
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
