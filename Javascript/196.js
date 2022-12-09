//while loops
let num = 0;
while (num < 10) {
    console.log(num);
    num++;
}

let count = 0;
while(count < 10){
    //1~10반복
    count++;
    //0~9까지 출력
    console.log(count);
}

//-> for문으로 치환하면
for(let i = 1; i<=10; i++);

const SECRET = "BabyHippo";

let guess = prompt("enter the secret code...");
while(guess !==SECRET) {
    guess = prompt("enter the secret code...");
}
console.log("CONGRATS YOU GOT THE SECRET!!!"); 


//The Break Keyword
let targetNum = Math.floor(Math.random() * 10);
let guess1 = Math.floor(Math.random() * 10);
while (true) {
    guess1 = Math.floor(Math.random() * 10);
    console.log(`CORRECT! Guessed: ${guess1} & target was: ${targetNum}`);
    break;
} else { 
    console.log(`Guessed ${guess1}... Incorrect!`);
}

let input = prompt("Hey, say something!")
while (true) {
    input = prompt(input);
    if (input.toLocaleLowerCase() === "stop copying me") break;
}
console.log( "OK YOU WIN!" )