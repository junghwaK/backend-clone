for (let i = 1; i < animals.length; i++) {
    console.log(i, animals[i])
};

//거꾸로
//i >= 0 이거나 i > -1 이 되야한다. 
for(let i = animals.length - 1; i >= 0; i--){
    console.log(animals[i])
};

//중첩루프(Nested Loops) : for loop안에 또다른 for loop존재
for (let i = 1; i<= 10; i++){
    console.log(`i is : ${i}`)
    for(let j = 1; j<4; j++ ){
        console.log(`       j is: ${j}`)
    }
}

const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for (let i = 0; i < seatingChart.length; i++){
    // console.log(seatingChart[i]) -> 이건 그냥 한줄씩 출력 그렇다면 한줄 안에있는 한글자씩 빼려면?
    const row = seatingChart[i];
    console.log(`ROW #${i + 1}`);
    for(let j = 0; j < row.length; j++){
        console.log(row[j])
    }
}