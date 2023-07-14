import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardsDto } from './dto/create-boards.dto';
import { BoardStatus } from './boards.model';

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
  @UsePipes(ValidationPipe)
  createBoards(@Body() createBoardsDto: CreateBoardsDto) {
    return this.boardsService.createBoards({ ...createBoardsDto });
  }

  @Get('/:id')
  getOneBoard(@Param('id') id: string) {
    return this.boardsService.getOneBoard(id);
  }

  @Delete('/:id')
  deleteOneBoard(@Param('id') id: string) {
    return this.boardsService.deleteOneBoard(id);
  }

  @Patch('/:id')
  updateOneBoardStatus(
    @Param('id') id: string,
    @Body('status') status: BoardStatus,
  ) {
    return this.boardsService.updateOneBoardStatus(id, status);
  }
}
