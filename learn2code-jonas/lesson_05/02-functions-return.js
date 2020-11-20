

// function hello( name ) {
//     return "Hello " + name + ".";
// }

// result = hello("Ninja");

// console.log(result);


// console.log("-----");


// write a function to check if an array contains a number
// E5. Check if an array contains a number

let myList = [ "Paul", "Eva", 9, "Bird", "Price", NaN ];


function checkArrayForNumber( array ) {
    for ( i = 0; i < array.length; i++ ) {
        var truth = "";
        if ( isNaN( array[i] ) ) {
            truth = false;
        } else {
            truth = true;
            break;
        }
    }
    return truth;
}


result = checkArrayForNumber( myList );

console.log( "Saying this array contains number is: " + result + "." );

