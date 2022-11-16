//functions in Typescript
//call signatures, polymorphism, overloading and generics

//call signatures
type Add = (a:number, b:number) => number;
//call signature's another way to show
type Add1 = {
    (a: number, b: number) : number
}

const add:Add = (a, b) => a+b

//overloading (= function overloading, method overloading)
//overloading happens when a function has multiple call signatures

type Add2 = {
    (c: number, d: number) : number
    (c: number, d: string) : number
}

const add2: Add2 = (c, d) => {
    if(typeof d === "string") return c
    return c+d
}

//overloading, when you design someting
type Config = {
    path: string,
    state: object
}

type Push = {
    //remember,void return nothing
    (path:string):void
    (config: Config): void
}

const push:Push = (config) => {
    if(typeof config ==="string") {console.log(config)}
    else{
        console.log(config.path, config.state)
    }
}

type Add3 = {
    (e:number, f:number) :number
    (e:number, f:number, g?:number): number,
}

const add3:Add3 = (e, f, g?:number) => {
    if(g) return e + f + g
    return e+f
}

