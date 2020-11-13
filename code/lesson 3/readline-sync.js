// HOW TO:

// 1. read directly a number
// 2. read a list of numbers

readlineSync = require('readline-sync');








let days = 5;
let i = 0;
console.log("Please tell me the number of minutes you spent on social media in the last " + days + " days");

let values = [];
while (i < days){
    valueString = readlineSync.question("Day " + i + ": ");
    valueNumber = Number(valueString);

    values[i] = valueNumber;
    i++;
}
console.log("Thanks! Now I have " + values.length + " recorded. Let's do some statistics.");
console.log(values)

