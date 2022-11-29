// 모델을 정의할때는 class 나 interface를 이용해서 한다.
export interface Board {
    id: string;
    title: string;
    description: string;
    status: BoardStatus
}

export enum BoardStatus {
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE'
}
