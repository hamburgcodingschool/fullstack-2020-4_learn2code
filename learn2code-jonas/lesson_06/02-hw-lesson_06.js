readlineSync = require('readline-sync')

const botName = "Simon";
const botBirthYear = 2020;

while (selectedOption !== -1) {

    var readlineSync = require('readline-sync'),
        options = [
            "Ask your name and say hello.",
            "Sing a song for you.",
            "Do some stats on arrays.",
            "Make you guess a number"
        ],
        selectedOption = readlineSync.keyInSelect(options, 'What do you want me to do?');

    console.log("You selected: " + selectedOption);

    console.log("\n-----\n");

    if (selectedOption === 0) {
        sayHello();
    }
    else if (selectedOption === 1) {
        singASong();
    }

}

function sayHello() {

    let userName = readlineSync.question("Hi there, my name is " + botName + "! " + "I was born in " + botBirthYear + ". What is your name?\n");

    console.log("Nice to meet you, " + userName + ".");

};

function singASong() {

    let singinGame00 = readlineSync.question("Let's play a singing game. Hit ENTER when you're ready.\n");

    let singinGame01 = readlineSync.question("Please tell me a number.\n");

    let singinGame02 = readlineSync.question("Great! Now give me a word.\n");

    let number = singinGame01;
    let word = singinGame02;
    let songText = "";

    for (var i = 0; i < number; i++) {
        songText += word;
    };

    // var singinGame03 = readlineSync.question("Thanks. Now hit ENTER to hear me sing.\n");

    console.log(songText);

}