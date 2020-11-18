readlineSync = require('readline-sync')

let randomNumber = 78;
let usersNumbers = [];
let chosenNumber = readlineSync.question("I have a number in mind. Guess which one it is!\n");
let chosenNumberAsNumber = Number(chosenNumber);
usersNumbers.push(chosenNumberAsNumber);


while (chosenNumberAsNumber !== randomNumber){
    if (chosenNumberAsNumber < randomNumber){
        console.log('I\'m sorry, that number is smaller than mine.');
        chosenNumber = readlineSync.question("Guess again.\n");
        chosenNumberAsNumber = Number(chosenNumber);
        usersNumbers.push(chosenNumberAsNumber)
    } else if (chosenNumberAsNumber > randomNumber){
        console.log('I\'m sorry, that number is bigger than mine.');
        chosenNumber = readlineSync.question("Guess again.\n");
        chosenNumberAsNumber = Number(chosenNumber);
        usersNumbers.push(chosenNumberAsNumber)
        // console.log(usersNumbers);
        } 
}


// usersNumbers.push(chosenNumberAsNumber)

console.log('Yeah, you got it within ' + (usersNumbers.length) + ' tries !!!');
