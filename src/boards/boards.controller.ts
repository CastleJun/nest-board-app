import { Controller, Get, Param } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.entity';

@Controller('boards')
export class BoardsController {
  boardsService: BoardsService;

  constructor(boardsService: BoardsService) {
    this.boardsService = boardsService;
  }

  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<Board> {
    return this.boardsService.getOneBoard(id);
  }
  //
  // @Get()
  // getAllBoards() {
  //   return this.boardsService.getAllBoards();
  // }
  //
  // @Post('/')
  // @UsePipes(ValidationPipe)
  // createBoards(@Body() createBoardsDto: CreateBoardsDto) {
  //   return this.boardsService.createBoards({ ...createBoardsDto });
  // }
  //
  // @Get('/:id')
  // getOneBoard(@Param('id') id: string) {
  //   return this.boardsService.getOneBoard(id);
  // }
  //
  // @Delete('/:id')
  // deleteOneBoard(@Param('id') id: string) {
  //   return this.boardsService.deleteOneBoard(id);
  // }
  //
  // @Patch('/:id')
  // updateOneBoardStatus(
  //   @Param('id') id: string,
  //   @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  // ) {
  //   return this.boardsService.updateOneBoardStatus(id, status);
  // }
}
