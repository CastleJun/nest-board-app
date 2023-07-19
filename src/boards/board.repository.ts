import { Repository } from 'typeorm';
import { Board } from './board.entity';
import { CreateBoardsDto } from './dto/create-boards.dto';
import { BoardStatus } from './boards.status-enum';
import { CustomRepository } from '../typeorm-util/typeorm-ex.decorator';

@CustomRepository(Board)
export class BoardRepository extends Repository<Board> {
  async createBoard(createBoardDto: CreateBoardsDto): Promise<Board> {
    const { title, description } = createBoardDto;
    const board = this.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
    });

    await this.save(board);
    return board;
  }
}
