import { Injectable } from '@nestjs/common';
import { Board } from './board.model';

@Injectable()
export class BoardsService {
    private boards: Board[] = [];

//여기의 Board는 return값이 어떤타입이 되는지
    getAllBoards(): Board[] {
        return this.boards;
    }
}
