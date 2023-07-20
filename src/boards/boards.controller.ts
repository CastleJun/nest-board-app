import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardsDto } from './dto/create-boards.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';
import { BoardStatus } from './boards.status-enum';

@Controller('boards')
export class BoardsController {
  boardsService: BoardsService;

  constructor(boardsService: BoardsService) {
    this.boardsService = boardsService;
  }

  @Get()
  getAllBoard() {
    return this.boardsService.getAllBoard();
  }

  @Get('/:id')
  getOneBoard(@Param('id') id: number) {
    return this.boardsService.getOneBoard(id);
  }

  @Post('/')
  @UsePipes(ValidationPipe)
  createBoards(@Body() createBoardsDto: CreateBoardsDto) {
    return this.boardsService.createBoard(createBoardsDto);
  }

  @Delete('/:id')
  deleteOneBoard(@Param('id', ParseIntPipe) id: number) {
    return this.boardsService.deleteOneBoard(id);
  }

  @Patch('/:id')
  updateOneBoardStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  ) {
    return this.boardsService.updatedBoardStatus(id, status);
  }
}
