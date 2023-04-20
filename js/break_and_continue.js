"use strict";

//Problem - 2
let input = prompt("Submit Odd Number between 1 and 50.");
for(let i=1; i<50; i++){
   if(input%2===1 && input>0 && input<50){
      alert(`Input is good! break!`);
      break;
   }else{
      alert(`Input is invalid`);
   }
}

// Problem - 3
for (let i= 1; i<50; i++){
   if(i%2===1 && i>0 && i<50 && i!==27){
      console.log(`Here is an odd number : ${i}.`);
   }else if(i===27){
      console.log(`Yikes! Skipping number : ${i}.`);
   }else{
      continue;
   }
}
