import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigModule } from '@nestjs/config';



async function bootstrap() {
  ConfigModule.forRoot({envFilePath: ".env"})
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 3000
  await app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
  });
}
bootstrap();
