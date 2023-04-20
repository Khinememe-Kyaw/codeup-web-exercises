"use strict";
// let allCone = Math.floor((Math.random() * 50) + 50);
// i=0;
// do{
//     let i = Math.floor((Math.random() * 5) + 1);
//     if(i===5){
//         console.log("5 cones sold.");
//     }else if(i===6){
//         console.log(`Cannot sell you 6 cones. I only have ${i}`)
//     }if(i+=allCone){
//         console.log("Yay, I sold them all")
//     }
//     break;
// }
// while(i<=allCone);

let allCone = Math.floor((Math.random() * 100) + 50);

do{
    let i = Math.floor((Math.random() * 5) + 1);
    if(i<=allCone){
        console.log(`${i} cone(s) of ice-cream Sold.`);
        allCone= allCone-i;
    }else if(i>allCone){
        console.log(`I don't have enough cone to sell`);
    }

}

while(allCone>0);
console.log("Yay, I sold them all");

