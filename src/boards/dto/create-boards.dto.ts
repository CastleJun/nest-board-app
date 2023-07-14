import { IsNotEmpty } from 'class-validator';

export class CreateBoardsDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
