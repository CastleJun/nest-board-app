import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardRepository } from './board.repository';
import { Board } from './board.entity';
import { CreateBoardsDto } from './dto/create-boards.dto';
import { BoardStatus } from './boards.status-enum';

@Injectable()
export class BoardsService {
  constructor(private boardRepository: BoardRepository) {}

  async getAllBoard() {
    return this.boardRepository.find();
  }

  createBoard(createBoardDto: CreateBoardsDto): Promise<Board> {
    return this.boardRepository.createBoard(createBoardDto);
  }

  async getOneBoard(id: number): Promise<Board> {
    const found = await this.boardRepository.findOne({ where: { id } });

    if (!found) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }

    return found;
  }

  async deleteOneBoard(id: number): Promise<void> {
    const result = await this.boardRepository.delete(id);

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
