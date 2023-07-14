import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardsModel, BoardStatus } from './boards.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardsDto } from './dto/create-boards.dto';

@Injectable()
export class BoardsService {
  private boards: BoardsModel[] = [];

  getAllBoards() {
    return this.boards;
  }

  createBoards(createBoardsDto: CreateBoardsDto) {
    const boards: BoardsModel = {
      //TODO 추후 DATABASE 연결시 자동으로 생성하기 전 까지 uuid lib로 대체한다.
      id: uuid(),
      status: BoardStatus.PUBLIC,
      ...createBoardsDto,
    };

    this.boards.push(boards);

    return boards;
  }

  getOneBoard(id: string): BoardsModel {
    const found = this.boards.find((board) => board.id === id);

    if (!found) {
      throw new NotFoundException(`Can't find board id: ${id}`);
    }

    return found;
  }

  deleteOneBoard(id: string) {
    const found = this.getOneBoard(id);

    this.boards = this.boards.filter((board) => board.id !== found.id);
  }

  updateOneBoardStatus(id: string, status: BoardStatus) {
    const board = this.getOneBoard(id);
    board.status = status;
    console.log(status);
    return board;
  }
}
