readlineSync = require('readline-sync')

let botName = "Sally"
let birthYear = 2020
console.log("Hi! My name is " + botName + ". I was born in the year " + birthYear); 


let userName = readlineSync.question("What is your name?\n");

while (userName !== "Paul"){
    console.log("I am only talking to Paul. I am not talking to you " + userName);
    userName = readlineSync.question("Tell me your name again\n");
}

console.log("Oh, hi Paul! I've been waiting for you");