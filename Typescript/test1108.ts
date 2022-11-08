let a = "hello"
let b = false
let c = [1, 2, 3]

//명시적 표현을 하기도 하는데 최소한으로 하는것이 좋다.
//그래야 우리가 키보드 치는 시간을 줄일 수 있다. 
let d : number[] = [] 
d.push(1)
const player ={
    name : "nico"
}

// syntax - do : and then type(name of a type)
// you don't have to do like ' : number[] '
// sometimes better do let typescript infer the type automatically.
let e : number[] = [1, 2];


//Optional Type

// const user : {
//     name:string,
//     age?:number
// } = {
//     name : "Jay"
// }


// type 'Alias' : it allow us to write less code.
type User = {
    name : string,
    age? :number
}

//We already have a User. So we can remove the user, infont of Jay or Terry
const Jay : User = {
    name: "Jay"
}

const Terry : User = {
    name: "Terry",
    age: 20 
}