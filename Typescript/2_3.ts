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

//Tuple
//It allow create Array. Tuple need to have minium length and also that should have certain specific types in certain specific position.
const player1: [string, number, boolean] = ["Jay", 1, true]
//When I go to he first index. And I try to change number, it won't be allow.
//player1's first index should be always stting
player1[0] = 1

//can combine tuple and read only
//const player1: readonly [string, number, boolean] = ["Jay", 1, true]

