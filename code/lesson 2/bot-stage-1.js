readlineSync = require('readline-sync')

botName = "Sally"

userName = readlineSync.question("Hi! My name is " + botName + "! What is your name?\n");

console.log("nice to meet you, " + userName)

ageString = readlineSync.question("What is your age?\n");
console.log(typeof ageString)

ageNumber = Number(ageString)
console.log(typeof ageNumber)

if (typeof ageString !== "number"){
    console.log("You did not give me a number!")
}
