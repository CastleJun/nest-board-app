import { BadRequestException, PipeTransform } from '@nestjs/common';
import { BoardStatus } from '../boards.status-enum';

export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOption = [BoardStatus.PUBLIC, BoardStatus.PRIVATE];
  transform(value: string) {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} is not in the status options`);
    }

    return value;
  }

  private isStatusValid(status: any) {
    return this.StatusOption.includes(status);
  }
}
