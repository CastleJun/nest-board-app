import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Board } from '../boards/board.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'nest-board-app',
  entities: [__dirname + '/../**/*.entity.{js,ts}', Board],
  synchronize: true,
};
