for (let i = 1; i < animals.length; i++) {
    console.log(i, animals[i])
};

//거꾸로
//i >= 0 이거나 i > -1 이 되야한다. 
for(let i = animals.length - 1; i >= 0; i--){
    console.log(animals[i])
};

//중첩루프(Nested Loops)