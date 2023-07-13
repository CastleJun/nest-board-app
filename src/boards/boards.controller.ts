import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
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
  createBoards(@Body() createBoardsDto: CreateBoardsDto) {
    return this.boardsService.createBoards({ ...createBoardsDto });
  }

  @Get('/:id')
  getOneBoard(@Param('id') id: string) {
    return this.boardsService.getOneBoard(id);
  }
}
