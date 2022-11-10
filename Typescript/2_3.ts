//I can also add read only property in my type
type Age = number;
type Name = string;
type Player = {
    //I get the protection somebody try to change the n ame of our Player
    readonly name:Name
    age?: Age
}

const playerMaker = (name:string) : Player => ({name})
const nico = playerMaker("nico")
nico.age = 12

//another example
const numbers : readonly number[] = [1, 2, 3, 4]
//'push' does not exist on read only. but if I remove the read only, it works
numbers.push(1)