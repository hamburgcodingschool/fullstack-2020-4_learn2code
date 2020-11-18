// Before I start writing my own function: 

// 1. What should the function do?
// 2. What does the function need?

function printSomething(){
    console.log("...");
}

function printWord(word){
    console.log(word);
}

// E1. Write a function that prints the same word more times. 
// printWordManyTimes("hello", 5);
// hellohellohellohellohello

function printWordManyTimes(word, count){
    let text = '';
    for (let i = 0; i<count; i++){
        text = text + word;
    }
    console.log(text);
}

printWordManyTimes("Hello", 5);
let text = "Hello";
let number = 5;
printWordManyTimes(text, number);



// Write a function that prints the sum of two numbers. 
// The 2 numbers should be passed in as parameters
// e.g. add(3,5)
// 8

function add(a,b){
    let sum = a+b;
    console.log(sum)
}

add(3,5);

// A function that takes an array as a parameter
// The function should print every element in the array
// e.g. printArrayElements([3,5,7])

function printArrayElements(array){
    for (let i =0; i<array.length; i++){
        console.log(i);
    }
}

