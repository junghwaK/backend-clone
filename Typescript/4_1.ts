abstract class User{
    constructor(
        //if i wanna use them, from other sub classes you don't use private. Use protected.
        protected firstName:string,
        protected lastName: string,
        protected nickname: string
    ) {}
    abstract getNickName(): void
    //abstract method - implementation
    getFullname(){
        return `${this.firstName} ${this.lastName}`
    }
}

class Player extends User{
    getNickName() {
        console.log(this.)
    }
}

const j = new Player("junghwa", "kim", "정화");

j.getFullname()
