"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor(color){
    if(color.toLowerCase() === "blue"){
        return ("blue is the color of the sky");
    }else if(color === "red"){
        return("Strawberries are red");
    }else {
        return("I don't know anything about " + color);
    }
}
analyzeColor('blue') // returns "blue is the color of the sky"
analyzeColor('red') // returns "Strawberries are red"
analyzeColor('cyan') // returns "I don't know anything about cyan"
//
// // Don't change the next two lines!
// // These lines create two variables for you:
// // - `colors`: a list of the colors of the rainbow
// // - `randomColor`: contains a single random color value from the list (this
// //                  will contain a different color every time the page loads)
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let randomColor = colors[Math.floor(Math.random() * colors.length)];
// /**
//  * TODO:
//  * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
//  * You should see a different message every time you refresh the page
//  */
analyzeColor(randomColor);

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
function analyzeColor(color){
    switch(randomColor){
    case (randomColor ==="blue"):
        console.log("blue is the color of the sky");
    break;
    case (randomColor === "red"):
        console.log("Strawberries are red");
    break;
    default:
        console.log("I don't know anything about " + randomColor);
        break;
    }
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
let color = prompt("What is your favorite color?")
alert(analyzeColor(color));
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckyNumber, totalAmount) {
    if (luckyNumber === 0) {
        return totalAmount;
        // console.log("You have no discount. And your total will be " + totalAmount)
    } else if (luckyNumber === 1) {
        return (totalAmount - (totalAmount * 0.1));
        // console.log("Congratulations! You get 10% discount. Your total will be " + (totalAmount - (totalAmount * 0.1)));
    } else if (luckyNumber === 2) {
        return (totalAmount - (totalAmount * 0.25));
        // console.log("Congratulations! You get 25% discount. Your total will be " + (totalAmount - (totalAmount * 0.25)));
    } else if (luckyNumber === 3) {
        return (totalAmount - (totalAmount * 0.35));
        // console.log("Congratulations! You get 35% discount. Your total will be " + (totalAmount - (totalAmount * 0.35)));
    } else if (luckyNumber === 4) {
        return (totalAmount - (totalAmount * 0.5));
        // console.log("Congratulations! You get 50% discount. Your total will be " + (totalAmount - (totalAmount * 0.5)));
    } else if (luckyNumber === 5)
        return 0;
        // console.log("Congratulations! You get all items for free.");
}
calculateTotal(0, 100) // returns 100
calculateTotal(4, 100) // returns 50
calculateTotal(5, 100) // returns 0
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
let  luckyNumber = Math.floor(Math.random() * 6);
let totalBill = parseFloat(prompt("What is your bill total?"));
alert("Your lucky number is " + luckyNumber + ". Your price before discount was $" + totalBill + ". Your Price after the discount is $" + (calculateTotal(luckyNumber, totalBill)));

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
//
let numOption = confirm("Would you like to submit the number ?");
if(numOption === true){
    let num = parseFloat(prompt("Please type the number"));
    if (isNaN(num) === true){
        alert("This is an incorrect input")
    }else{
        let isEven = (num%2===0)? ("The number is Even."): ("The number is Odd.");
        alert (isEven);
        let add100 = (num + 100);
        alert("Adding 100 to your number will be " + add100 +".")
        let isPositive = (num>=0)? "Number is Positive." :  "Number is Negative.";
        alert (isPositive);
    }
}else{
    alert ("That's cool");
}

function num(userInput) {
    // let numOption = confirm("Would you like to submit the number ?");
    // if (numOption === true) {
        // let userInput = parseFloat(prompt("Please type the number"));
        if (isNaN(userInput) === true) {
            alert("This is an incorrect input")
        } else {
            let isEven = (userInput % 2 === 0) ? ("The number is Even.") : ("The number is Odd.");
            alert(isEven);
            let add100 = (userInput + 100);
            alert("Adding 100 to your number will be " + add100 + ".")
            let isPositive = (userInput >= 0) ? "Number is Positive." : "Number is Negative.";
            alert(isPositive);
        }
    // } else {
    //     alert("That's cool");
    // }
}
let userInput = parseFloat(prompt("Please type the number"));
num(userInput);


// if(confirm("Would you like to enter a number?")) {
//     let userInput = prompt("Enter a number");
//     if (!isNaN(userInput)) {
//     if (userInput % 2 === 0) {
//         alert("The number " + userInput + " is even");
//     } else {
//         alert("The number " + userInput + " is odd");
//         alert(`The number ${userInput} is odd"`);
//     }
//     alert("The number plus 100 = " + (pasrseInt(UserInput)) + 100);
//     if (userInput >= 0) {
//         alert("The number " + userInput + "is Positive.");
//     } else {
//         alert(`The number ${userInput} is Negative.`);
//     }else{
//             alert("This is an incorrect input");
//         }
// }
// }

function numberInfo(){
    if(confirm("Would you like to enter a number?")) {
        let userInput = prompt("Enter a number");
        if (!isNaN(userInput)) {
            if (userInput % 2 === 0) {
                alert("The number " + userInput + " is even");
            } else{
                alert(`The number ${userInput} is odd"`);
            }
            alert("The number plus 100 = " + (pasrseInt(UserInput)) + 100);
            if (userInput >= 0) {
                alert("The number " + userInput + "is Positive.");
            }else {
                alert(`The number ${userInput} is Negative.`);
            }

        }
    }
    else{
        alert("This is an incorrect input");
    }
}