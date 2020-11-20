readlineSync = require('readline-sync')

while (selectedOption !== -1)
{
    console.log("This is what I can do so far. Please let me know what you want me to do")
    var readlineSync = require('readline-sync'),
    options = [
        "Ask your name and say hello.", 
        "Sing a song for you.",   
        "Do some stats on arrays.",  
        "Make you guess a number"   
    ],
    selectedOption = readlineSync.keyInSelect(options, 'What do you want me to do?');

    console.log(selectedOption)
    if (selectedOption === 0){
        sayHello();
    } else if (selectedOption === 1){
        singASong();
    } else if (selectedOption === 2){
        // arrayStats();
    }
}


function sayHello(){
    let userName = readlineSync.question("Hi, what is your name?\n");
    console.log("Nice to meet you, " + userName + "!\n");
}

function singASong(){
    let songNumberString = readlineSync.question("I want to write a song for you. Tell me a number!\n");
    let songWord = readlineSync.question("Awesome, now tell me a word!\n");

    let songNumberNr = Number(songNumberString);

    song = []; // variable for empty array to store the words of the song inside
    for (let i=0; i <=songNumberNr; i++) {
        song += songWord; 

    }
    console.log(song)
}