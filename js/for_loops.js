"use strict";

//Problem - 2
function showMultiplicationTable(num){
    for(let i=1;i<=10;i++){
        console.log(`${num} x ${i} = ${num*i}`);
    }
}
showMultiplicationTable(7);



//Problem - 3
for(let i=0; i<10; i++){
    let random = Math.floor((Math.random() * 200) + 20);
    if(random%2===0){
        console.log(`${random} is even`);
    }else{
        console.log(`${random} is odd`);
    }
}

//Problem - 4
for (let i = 1; i <= 9; i++) {
    console.log(i.toString().repeat(i));
}



//Problem - 5
for(let i=100; i>0; i-=5){
    console.log(i);
}