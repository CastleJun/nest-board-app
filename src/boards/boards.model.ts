export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}

export interface BoardsModel {
  id: string;
  title: string;
  description: string;
  status: BoardStatus;
}
