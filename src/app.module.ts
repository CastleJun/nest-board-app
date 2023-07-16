import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeOrmConfig';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), BoardsModule],
})
export class AppModule {}
