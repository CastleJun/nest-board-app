import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardsModel } from './boards.model';

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

  @Post('/')
  createBoards(
    @Body() body: { title: string; description: string },
  ): BoardsModel {
    return this.boardsService.createBoards({ ...body });
  }
}
