

// =========================================
// Bot code
// =========================================



readlineSync = require('readline-sync')

const botName = "Simon";
const botBirthYear = 2020;
let userName = "";

while (selectedOption !== -1) {

    var readlineSync = require('readline-sync'),
        options = [
            "Ask your name and say hello?",
            "Aing a song for you?",
            "Calculate your social media usage of the last days?",
            "Play a number guessing game with you?",
            "Analyze a sentence for you?",
            "Encipher stuff for you?",
            "Decipher stuff for you?"
        ],
        selectedOption = readlineSync.keyInSelect(options, 'What do you want me to do?');

    // console.log("You selected: " + selectedOption+1);

    console.log("\n-----\n");

    if (selectedOption === 0) {
        sayHello();
    }
    else if (selectedOption === 1) {
        singASong();
    } else if (selectedOption === 2) {
        socialMediaUsage();
    } else if (selectedOption === 3) {
        guessNumberGame();
    } else if (selectedOption === 4) {
        sentenceAnalysis();
    } else if (selectedOption === 5) {
        encipherStuff();
    } else if (selectedOption === 6) {
        decipherStuff()
    }
}

function sayHello() {

    let userName = readlineSync.question("Hi there, my name is " + botName + "! " + "I was born in " + botBirthYear + ". What is your name?\n");

    console.log("\n-----\n");

    console.log("Nice to meet you, " + userName + ".");

    console.log("\n-----\n");


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
    console.log("\n-----\n");

    console.log(songText);

    console.log("\n-----\n");

}


function socialMediaUsage() {


    var values = [];

    //   This is the time you spent on social media in the last 5 days:
    //   [40, 30, 20, 45, 15]

    var socialMediaTracking = readlineSync.question("I can help you track and analyse your social media usage. Hit ENTER to start.\n");

    var socialMedia01 = readlineSync.question("How much time, in minutes, did you spend on social media today?\n");

    var socialMedia02 = readlineSync.question("And yesterday?\n");

    var socialMedia03 = readlineSync.question("And the day before?\n");

    var socialMedia04 = readlineSync.question("And the day before that?\n");

    var socialMedia05 = readlineSync.question("And can you remeber how many minutes the day three days before yesterday?\n");

    var values = [Number(socialMedia01), Number(socialMedia02), Number(socialMedia03), Number(socialMedia04), Number(socialMedia05)];

    // var values = [40, 30, 20, 45, 15]

    console.log("These are the amounts in minutes per day, you spent on social media in the last 5 days: " + values + "\n");


    var average = 0;
    var maximum = values[0];
    var minimum = values[0];
    var total = 0;

    for (var i = 0; i < values.length; i++) {
        if (maximum < values[i]) {
            maximum = values[i];
        }
        if (minimum > values[i]) {
            minimum = values[i];
        }
        total += values[i];
    }
    console.log(`In total you spent ${total} minutes on social media in the last 5 days.`);
    average = total / values.length;



    console.log("The average time is: " + average + " minutes.");
    // The average time spent is 30 minutes (not 35 Minutes 😉 ).

    console.log("The maximum time spent in a day is: " + maximum + " minutes.");
    //   The maximum time spent in a day is: 45 minutes.

    console.log("The minimum time spent in a day is: " + minimum + " minutes.");
    //   The minimum time spent in a day is: 15 minutes.

    console.log("The total time spent in the last 5 days is: " + total + " minutes.");
    //   The total time spent in the last 5 days is: 150 minutes.

}


function guessNumberGame() {
    let numberInMind = 43;
    let guessedNumber = readlineSync.question("Let's play aguessing game. I have a number in my mind. Take a guess.\n");

    while (numberInMind !== guessedNumber) {
        if (guessedNumber < numberInMind) {
            guessedNumber = readlineSync.question(`Wrong. My number is bigger than ${guessedNumber}. Guess again.\n`);
        } else if (guessedNumber > numberInMind) {
            guessedNumber = readlineSync.question(`Wrong. My number is smaller than ${guessedNumber}. Guess again.\n`);
        } else {
            console.log(`Correct. The number I thought of is: ${numberInMind}.`);
            break;
        }
    }
}

function sentenceAnalysis() {
    console.log("\n-----\n");
    let sentenceInput = readlineSync.question("Hey! Tell me a sentence in englisch or german, I'll do a grammar check for you.\n");
    let sentenceToAnalyze = sentenceInput;
    // console.log(sentenceToAnalyze);
    // console.log(sentenceToAnalyze.length);

    // Remove eventual whitespaces at beginning and end from sentence
    // let sentenceOnly = sentenceToAnalyze.trim(); // Unnecessary, because it seems to be done automatically by readlinSync package.

    //Get the end of the sentence ., ! or ?, based on a regular expression and store it for later use.
    let sentenceEnd = "";
    if (sentenceToAnalyze.includes("." || "!" || "?")) {
        let sentenceEndRegEx = /[.!?]/g;
        let sentenceToAnalyzeEndArray = sentenceToAnalyze.match(sentenceEndRegEx);
        sentenceEnd = sentenceToAnalyzeEndArray[0];
        // console.log(sentenceToAnalyzeEndArray);
        // console.log("Your sentence ends with: " + sentenceEnd);
        // Get substring from the beginning of the string until full stop. To guarantee to only take the first sentence, even if more is put in.
        firstSentenceToAnalyzeArray = sentenceToAnalyze.split(sentenceEnd); // need to respect ? and ! too.
        sentenceToAnalyze = firstSentenceToAnalyzeArray[0];
    } else {

    }

    // Strip down the sentence via regex and replaceAll to only wanted characters
    let regExLettersOnly = /[^a-zäöüß]/gi; // Remove everything except german and english letters of the alphabet in upper and lowercase.
    // let regEx = /[^a-zäöüß0-9.,"'<>-–—]/gi; // Remove everything except the stuff between square brackets.
    let charsToCount = sentenceToAnalyze.replaceAll(regExLettersOnly, '');
    // console.log(charsToCount);
    let charCount = charsToCount.length;
    console.log("\n-----\n");
    if (charCount > 140) {
        console.log("Your sentence has more than 140 characters.");
    } else {
        console.log("Your sentence has less than 140 characters.");
    }

    console.log(`Your sentence has ${charCount} characters.`);

    // Determine longest word
    let regExLettersAndSpaces = /[^a-zäöüß ]/gi;
    let wordsAndSpaces = sentenceToAnalyze.replaceAll(regExLettersAndSpaces, '');

    // console.log(wordsOnly);
    let wordsOnlyArray = wordsAndSpaces.split(' ');
    // console.log(wordsOnlyArray);

    // console.log(wordsArray.length);
    let longestWord = "";
    let wordLengthSum = 0;
    for (let i = 0; i < wordsOnlyArray.length; i++) {
        let checkWord = wordsOnlyArray[i];
        if (checkWord.length > longestWord.length) {
            longestWord = checkWord;
        }
        wordLengthSum += checkWord.length;
    }

    console.log(`The longest word in you sentence is: "${longestWord}", it has ${longestWord.length} letters.`);
    let avgWordLength = wordLengthSum / wordsOnlyArray.length;
    console.log(`The average length of words in your sentence is ${avgWordLength} letters.`)

    let messUpSentence = "";
    messUpSentence = sentenceToAnalyze.replaceAll('a', 'z');
    messUpSentence = messUpSentence.concat('', sentenceEnd);

    console.log(`Look what I did to your sentence: \n${messUpSentence}. \nFunny, right?`);

    // Define array with curse words
    let curseWordsArray = ['motherfucker', 'Motherfucking', 'Shit', 'Shite', 'Prick', 'Fuck', 'Fucking', 'Fucker', 'Piss', 'Ass', 'Bitch', 'Sucker', 'Asshole', 'Cunt', 'Dick', 'Wanker', 'Arsch', 'Penner', 'Arschloch', 'Depp', 'idiot', 'wichser', 'lutscher', 'abgefuckter', "blöd", "Hurensohn"];

    // Convert array to lowercase, not needed as we use regex with parameter /gi which mathces gloablly and case insensitive
    // curseWordsArray = curseWordsArray.join('|').toLowerCase().split('|');

    // Sort array by length descending
    curseWordsArray = curseWordsArray.sort(function (a, b) {
        // ASC  -> a.length - b.length
        // DESC -> b.length - a.length
        return b.length - a.length;
    });


    // console.log(curseWordsArray);


    let cleanSentence = sentenceToAnalyze;
    // console.log(cleanSentence);

    // Clean the sentence and cover curse words by *
    for (let i = 0; i < curseWordsArray.length; i++) {
        let curseWord = curseWordsArray[i];
        let curseWordCover = "";
        let curseWordRegEx = new RegExp(curseWord, "gi");
        // console.log(curseWord);
        // console.log(curseWordRegEx);
        // console.log(curseWordCover);
        // Determine 
        curseWord.split('').forEach(element => {
            curseWordCover += "*";
        });
        cleanSentence = cleanSentence.replaceAll(curseWordRegEx, curseWordCover);
    }
    // Add the last punctuation mark to the sentence again.
    cleanSentence = cleanSentence.concat('', sentenceEnd);

    // Log the sentence to console
    console.log(`I found inappropriate language and censored it for you: \n${cleanSentence}`)
    console.log("\n-----\n");
}


function encipherStuff() {
    console.log("\n-----\n");
    let input = readlineSync.question("Hey! Tell me something to encipher.\n");
    // Define alphabet
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < input.length; i++) {
        let currentIndex = alphabet.indexOf(input[i]);
        console.log(input[i]);
        console.log(currentIndex);
        // Get index of letter
        // Calculate new index
        // Replace letter with new letter
    }
}

function decipherStuff() {

}