readlineSync = require('readline-sync');

const botName = "Simon";
const botBirthYear = 2020;

var userName = readlineSync.question("Hi there, my name is " + botName + "! " + "I was born in " + botBirthYear + ". What is your name?\n");

console.log("Nice to meet you, " + userName +".");



var birthYear = readlineSync.question("I know this may not be nice to ask " + userName + ", but I am curious: How old do you become this year?\n");

var birthYear = 2020 - birthYear;

console.log("So your birth year is: " + birthYear + "! But I guess you knew that already :)\n");



var guessingGame = readlineSync.question("Now " + userName + ", let's play a guessing game. Are you ready? Press Enter!\n");

var remainder = readlineSync.question("Think about a number between 0 and 100 and write it down on paper! When ready, press Enter.\n")

var remainder3 = readlineSync.question("Ok. So if you divide your number by 3, what is the remainder?\n");

var remainder5 = readlineSync.question("Nice! If you divide your number by 5, what is the remainder?\n");

var remainder7 = readlineSync.question("One more! If you divide your number by 7, what is the remainder?\n");

var secretNumber = (remainder3 * 70 + remainder5 * 21 + remainder7 * 15) % 105;

console.log("Okay, ready for me to blow your mind? \n");
console.log("Your secret number is ... " + secretNumber +"!\n");
console.log("I am amazing, right?\n");
