readlineSync = require('readline-sync')

// 1.1
let botName = "Sally"
let birthYear = 2020
console.log("Hi! My name is " + botName + ". I was born in the year " + birthYear); 


// 1.2
let userName = readlineSync.question("What is your name?\n");
console.log("Nice to meet you, " + userName);


// 1.3
let ageString = readlineSync.question("What is your age?\n");
console.log(typeof ageString);

let ageNumber = Number(ageString);
let userBirthYear = 2020 - ageNumber;

console.log("So you are born in " + userBirthYear + "!\n");


// 1.4
readlineSync.question("Let's play a guessing game. Ready? Press Enter!");
readlineSync.question(userName + ", think about a number and write it down on paper! When ready, press Enter.");
let r3String = readlineSync.question("If you divide your number by 3, what is the remainder?");
let r5String = readlineSync.question("Nice! And when you divide your number by 5, what is the remainder?");
let r7String = readlineSync.question("One more! If you divide your number by 7, what is the remainder?");

let remainder3 = Number(r3String);
let remainder5 = Number(r5String);
let remainder7 = Number(r7String);

let secretNumber = (remainder3 * 70 + remainder5 * 21 + remainder7 * 15) % 105;

console.log("The number you thought of is... " + secretNumber);
console.log("I am amazing, right?");