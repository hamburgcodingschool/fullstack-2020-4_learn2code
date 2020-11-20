// const { setEncoding } = require('readline-sync');

readlineSync = require('readline-sync');

// const botName = "Simon";
// const botBirthYear = 2020;

// var userName = readlineSync.question("Hi there, my name is " + botName + "! " + "I was born in " + botBirthYear + ". What is your name?\n");

// console.log("Nice to meet you, " + userName +".");



// var birthYear = readlineSync.question("I know this may not be nice to ask " + userName + ", but I am curious: How old do you become this year?\n");

// var birthYear = 2020 - birthYear;

// console.log("So your birth year is: " + birthYear + "! But I guess you knew that already :)\n");



// var guessingGame = readlineSync.question("Now " + userName + ", let's play a guessing game. Are you ready? Press Enter!\n");

// var remainder = readlineSync.question("Think about a number between 0 and 100 and write it down on paper! When ready, press Enter.\n")

// var remainder3 = readlineSync.question("Ok. So if you divide your number by 3, what is the remainder?\n");

// var remainder5 = readlineSync.question("Nice! If you divide your number by 5, what is the remainder?\n");

// var remainder7 = readlineSync.question("One more! If you divide your number by 7, what is the remainder?\n");

// var secretNumber = (remainder3 * 70 + remainder5 * 21 + remainder7 * 15) % 105;

// console.log("Okay, ready for me to blow your mind? \n");
// console.log("Your secret number is ... " + secretNumber +"!\n");
// console.log("I am amazing, right?\n");


// console.log("-----");

var singinGame00 = readlineSync.question("Let's play a singing game. Hit ENTER when you're ready.\n");

var singinGame01 = readlineSync.question("Please tell me a number.\n");

var singinGame02 = readlineSync.question("Great! Now give me a word.\n");

var number = singinGame01;
var word = singinGame02;
var songText = "";

for (var i = 0; i < number; i++) {
    songText += word;
};

// var singinGame03 = readlineSync.question("Thanks. Now hit ENTER to hear me sing.\n");

console.log(songText);


console.log("\n-----\n");


var values = [];

//   This is the time you spent on social media in the last 5 days:
//   [40, 30, 20, 45, 15]

var socialMediaTracking = readlineSync.question("I can help you track and analyse your social media usage. Hit ENTER to start.\n");

// var socialMedia01 = readlineSync.question("How much time, in minutes, did you spend on social media today?\n");

// var socialMedia02 = readlineSync.question("And yesterday?\n");

// var socialMedia03 = readlineSync.question("And the day before?\n");

// var socialMedia04 = readlineSync.question("And the day before that?\n");

// var socialMedia05 = readlineSync.question("And can you remeber how many minutes the day three days before yesterday?\n");

// var values = [ Number(socialMedia01), Number(socialMedia02), Number(socialMedia03), Number(socialMedia04), Number(socialMedia05) ];

var values = [ 40, 30, 20, 45, 15 ]

console.log("These are the amounts in minutes per day, you spent on social media in the last 5 days: " + values + "\n");

var average = 0;
var maximum = values[0];
var minimum = values[0];
var total = 0;

for ( var i = 0; i < values.length; i++ ) {
    if ( maximum < values[i] ) {
        maximum = values[i];
    }
    if ( minimum > values[i] ) {
        minimum = values[i];
    }
    total += values[i];
}
console.log( total );
average = total / values.length;

console.log("The average time is: " + average + " minutes.");
// The average time spent is 30 minutes (not 35 Minutes 😉 ).

console.log("The maximum time spent in a day is: " + maximum + " minutes.");
//   The maximum time spent in a day is: 45 minutes.

console.log("The minimum time spent in a day is: " + minimum + " minutes.");
//   The minimum time spent in a day is: 15 minutes.

console.log("The total time spent in the last 5 days is: " + total + " minutes.");
//   The total time spent in the last 5 days is: 150 minutes.

