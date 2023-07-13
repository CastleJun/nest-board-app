import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  boardsService: BoardsService;
  constructor(boardsService: BoardsService) {
    this.boardsService = boardsService;
  }

  @Get()
  getAllBoards() {
    return this.boardsService.getAllBoards();
  }
}
