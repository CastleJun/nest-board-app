import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardsDto } from './dto/create-boards.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';
import { BoardStatus } from './boards.status-enum';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../auth/get-user.decorator';
import { User } from '../auth/user.entity';

@Controller('boards')
@UseGuards(AuthGuard())
export class BoardsController {
  boardsService: BoardsService;

  constructor(boardsService: BoardsService) {
    this.boardsService = boardsService;
  }

  @Get()
  getAllBoard(@GetUser() user: User) {
    return this.boardsService.getAllBoard(user);
  }

  @Get('/:id')
  getOneBoard(@Param('id') id: number) {
    return this.boardsService.getOneBoard(id);
  }

  @Post('/')
  @UsePipes(ValidationPipe)
  createBoards(
    @Body() createBoardsDto: CreateBoardsDto,
    @GetUser() user: User,
  ) {
    return this.boardsService.createBoard(createBoardsDto, user);
  }

  @Delete('/:id')
  deleteOneBoard(@Param('id', ParseIntPipe) id: number, @GetUser() user: User) {
    return this.boardsService.deleteOneBoard(id, user);
  }

  @Patch('/:id')
  updateOneBoardStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  ) {
    return this.boardsService.updatedBoardStatus(id, status);
  }
}
