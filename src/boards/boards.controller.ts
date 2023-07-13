import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardsModel } from './boards.model';
import { CreateBoardsDto } from './dto/create-boards.dto';

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
  createBoards(@Body() createBoardsDto: CreateBoardsDto): BoardsModel {
    return this.boardsService.createBoards({ ...createBoardsDto });
  }
}
