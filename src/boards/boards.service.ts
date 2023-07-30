import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardRepository } from './board.repository';
import { Board } from './board.entity';
import { CreateBoardsDto } from './dto/create-boards.dto';
import { BoardStatus } from './boards.status-enum';
import { User } from '../auth/user.entity';

@Injectable()
export class BoardsService {
  constructor(private boardRepository: BoardRepository) {}

  async getAllBoard(user: User) {
    const query = await this.boardRepository
      .createQueryBuilder('board')
      .where('board.userId = :userId', { userId: user.id });
    const boards = await query.getMany();

    console.log(user);
    return boards;
  }

  createBoard(createBoardDto: CreateBoardsDto, user: User): Promise<Board> {
    return this.boardRepository.createBoard(createBoardDto, user);
  }

  async getOneBoard(id: number): Promise<Board> {
    const found = await this.boardRepository.findOne({ where: { id } });

    if (!found) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }

    return found;
  }

  async deleteOneBoard(id: number, user: User): Promise<void> {
    const result = await this.boardRepository.delete({
      id,
      user: { id: user.id },
    });

    if (result.affected === 0) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
  }

  async updatedBoardStatus(id: number, status: BoardStatus) {
    const board = await this.getOneBoard(id);

    board.status = status;
    await this.boardRepository.save(board);

    return board;
  }
}
