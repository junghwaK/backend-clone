//Polymorphism
// create a function, receive array and is going to print the items of array one by one(doesnt matter the type)
type SuperPrint = {
    //concrete type : types we've seen before - number, boolean, string, void, unknown...
    //<>in here, as you can see. this is the Generic. it could be the potato or whatever you want. 
    //<> This called signature is going to receive Generic
    <TypePlaceholder>(arr: TypePlaceholder[]):TypePlaceholder


    // (arr: boolean[]):void
    // (arr: string[]):void
    // (arr: (number|boolean)[]):void

    //generic : it's like placeholder for the types.
    //We use generic when we are writing our call signatures, but we really dont know what type would be here.
}

const superPrint: SuperPrint = (arr) => {
    arr.forEach(i => console.log(i))
}


superPrint([1, 2,  3, 4])
superPrint([true, false, true])
superPrint(["h", "i", "j"])
superPrint([1, 2, true, false])