import { Injectable } from '@nestjs/common';
import { BoardsModel } from './boards.model';

@Injectable()
export class BoardsService {
  private boards: BoardsModel[] = [];

  getAllBoards() {
    return this.boards;
  }
}
