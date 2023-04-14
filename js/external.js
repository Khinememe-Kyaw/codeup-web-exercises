"use strict";

console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

let userInput = prompt('What is your favorite color?');
alert( "Great, " + userInput + " is my favorite color too!");
console.log( "Great, " + userInput + " is my favorite color too!");

let userInputLM = parseInt(prompt('How many days would you like to rent the movie "The little mermaid" ?'));
let userInputBB = parseInt(prompt('How many days would you like to rent the movie "Brother Bear" ?'));
let userInputH = parseInt(prompt('How many days would you like to rent the movie "Hercules" ?'));
let total = 3*(userInputLM + userInputBB + userInputH);
alert("Your total for rental movie is " + total +"$.");
console.log("Your total for rental movie is " + total +"$.")

// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

let userInputG = parseInt(prompt('How many hours did you work at Google?'));
let userInputA = parseInt(prompt('How many hours did you work at Amazon?'));
let userInputF = parseInt(prompt('How many hours did you work at Facebook?'));
let salary = ((400* userInputG) +(380* userInputA) +(350*userInputF));
alert("Your salary was " + salary +"$.");
console.log("Your salary was " + salary +"$.");

// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

let class_full = confirm('Is class have available seat ?');
let schedule = confirm('There is no conflict in schedule.');
    if(class_full && schedule){
        alert("You are enrolled!")
        console.log("You are enrolled!");
    }else{
        alert("You will not be enrolled!")
        console.log("You will not be enrolled!");
    }

// A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
// function offer(item, expired, premiumMember){
//     if(item>2 && expired===false || premiumMember===true){
//         console.log("offer is valid");
//     }else{
//         console.log("offer is not valid");
//     }
// }
let itemNum = parseInt(prompt('How many items are you purchasing?'));
let expired = confirm('Is coupon has valid date?');
let primeMember = confirm('Are you prime Member?');
if(itemNum>2 && expired || primeMember){
    alert("Offer is valid!")
    console.log("Offer is valid!");
}else{
    alert("Offer is not valid!")
    console.log("Offer is not valid!");
}
