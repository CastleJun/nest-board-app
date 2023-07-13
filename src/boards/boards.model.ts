export type BoardStatus = 'private' | 'public';

export interface BoardsModel {
  id: string;
  title: string;
  description: string;
  status: BoardStatus;
}
