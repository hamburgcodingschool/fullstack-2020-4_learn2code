/*
The replaceAll() method returns a new string with all matches of a pattern replaced by a replacement. 
The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.
The original string is left unchanged.
*/


// Define string
let myString = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

// Log string to the console
// console.log(myString);



// console.log("\n-----\n");



// Define a regex pattern. What does it mean?
const regexReplacePattern = /Dog/gi;

// console.log( myString.replaceAll(regexReplacePattern, 'squid') );



console.log("\n-----\n");

// Replace "string" with "string"
// console.log(myString.replaceAll( 'dog', 'squid'));



// console.log("\n\n");


// Replace constructed string with other
// console.log(myString.replaceAll( 'do' + 'g', 'ant' ));


// console.log("\n-----\n");


console.log(myString.replaceAll( '','ant' ));


// console.log("\n-----\n");


// myObject = { "key": "value" };

// console.log(myString.replaceAll( 'dog', myObject ));


// console.log("\n-----\n");


// Use with an array
// console.log(myString.replaceAll( "", ["5","6" ,"9"] ));
