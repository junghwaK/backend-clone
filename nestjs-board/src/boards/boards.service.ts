import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
//uuid는 버전이 많은데 그중에 우리는 v1을 쓴다.
import { v1 as uuid } from 'uuid';

@Injectable()
export class BoardsService {
    private boards: Board[] = [];

//여기의 Board는 return값이 어떤타입이 되는지
    getAllBoards(): Board[] {
        return this.boards;
    }

    createBoard(title: string, description: string){
        const board: Board = {
            //title과 description 처럼 똑같은거 두개써주면 그냥 하나로 써주면 된다. 
            // title: title,
            // description: description,
            id: uuid(),
            title,
            description,
            //model에 우리가 PUBLIC아님 PRIVATE 두개만 정의해줘서 이렇게 두개만 뜸
            status: BoardStatus.PUBLIC
        }
        this.boards.push(board);
        return board;
    }
}
