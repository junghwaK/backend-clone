//How do we communicate with typescript?

//Unknow :  we use unknown,when we dont know unknown the tpye of our variables in advance.
let a: unknown;

if(typeof a=== 'number'){
    let b = a+1
}

if(typeof a === "string"){
    let b = a.toUpperCase();
}

//void : This is a function, that dont return anything. Usually I don't have to specificity void.
function hello(){
    console.log('x')
}

//toUpperCase does not exist on type 'void'. void means emptiness. It is noting there.
// const a = hello();
// a.toUpperCase()

//never : When a funcion never returns.
function hell02():never{
    throw new Error("xxx")
}

function hello3(name:string|number){
    if(typeof name === "string"){
        name
    } else if(typeof name === "number"){
        name
    } else {
        //this code should never ever run. 
        name
    }
}