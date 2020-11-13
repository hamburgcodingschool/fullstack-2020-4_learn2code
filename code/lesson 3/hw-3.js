readlineSync = require('readline-sync')

// Tell me a number larger than 10
// Prompt for exercise 2.2
let valueNumber = 0;

while (valueNumber < 10){

    valueString = readlineSync.question("Give me a number larger than 10...\n");
    valueNumber = Number(valueString)
    if (valueNumber < 10) {
        console.log("Come ooonnn!")
    } else {
        break;
    }
    
}

console.log("Finally! Thanks!")
console.log("you gave me the number: " + valueNumber)

randomNumber = 78











// build a list of numbers from readline-sync
// prompt for exercise 2.3

let numbers = []

let addNumbers = true;
i = 0;

while (addNumbers){
    valueString = readlineSync.question("Give me a number! \n");
    valueNumber = Number(valueString);

    numbers[i] = valueNumber;
    i++;

    anotherOne = readlineSync.keyInYN('Do you want to add more numbers?')

    if (!anotherOne) {
        break
    }
}

console.log(numbers)
