//example of the generic
type Player<E> = {
    name: string
    extraInfo:E
}
type JayExtra = {
    favFood: string
}
type JayPlayer = Player<JayExtra>

// type JayPlayer = Player<{favFood:string}>

const jay: JayPlayer = {
    name: "jay",
    extraInfo: {
        favFood: "kimchi jjim"
    }
}
//reuse the tpyes
const terry: Player<null> = {
    name: "terry",
    extraInfo: null
}

type a = Array<number>
let a:A = [1, 2, 3, 4]
function printAllNumbers(arr: Arr<number>){

}

//if i use react with generic..
//this is going to be type number
useState<number>()