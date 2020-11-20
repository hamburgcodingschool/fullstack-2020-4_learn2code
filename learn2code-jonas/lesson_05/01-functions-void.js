// 1. What does my function do?
// 2. What does my function need?


function printWordManyTimes( word, times ) {
    var count = times;
    var text = "";
    for ( i = 0; i < count; i++ ) {
        // console.log(word);
        text += word + " ";
    }
    console.log(text);
}

printWordManyTimes( "Damn", 10 );


console.log("-----");


function addTwoNumbers(firstNumber, secondNumber) {
    let numberSum = firstNumber + secondNumber;
    console.log(numberSum);
};

addTwoNumbers( 20, 50 );


console.log("-----");



function printArrayElements( array ) {
    for ( i = 0; i < array.length; i++ ) {
        console.log( array[i] );
    }
}

let myNumbers = [ 2, 7, 9, 29, 491, 2, 0 ];
printArrayElements( myNumbers );