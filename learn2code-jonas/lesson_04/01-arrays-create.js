// Let's start with an empty array.

let prices = [];

prices.push(1000);
prices.push(1200);
prices.push(1600);
prices.push(2200);
prices.push(3100);
prices.push(5400);

console.log( prices );


console.log("-----");


let numbers = [];

for ( var i = 7; i < 211; i+=5 ) {
    numbers.push(i);
}

console.log( numbers );


console.log("-----");


// Create an array from another array.

let source = [ 2400, 1800, 6000, 8000, 1600, 3000, 5000 ];
let destination = [];

for ( let i = 0; i < source.length; i++ ) {
    let currentValue = source[ i ];
    if ( currentValue > 2000 ) {
        destination.push( currentValue );
    }
}

console.log(destination);


console.log("-----");


// E2. Can I please get a list of all customer names who have made a purchase larger than 2000?
let purchases = [1300, 1500, 2100, 2400, 1000, 2500];
let customers = ["Andreas", "Lina", "Karol", "Steffen", "Thomas", "Julius"];
let positions = [];

// 1. Find the positions at which the purchases > 2000 are.
for ( let i = 0; i < purchases.length; i++ ) {
    let currentValue = purchases[ i ];
    if ( currentValue > 2000 ) {
        positions.push( i );
    }
}

console.log(positions);
// Should be: [2, 3, 5]


let names = [];

// 2. Use the positions to extract the names from the list of customers.

for ( let i = 0; i < positions.length; i++ ) {
    customerPosition = positions[ i ];
    names.push( customers[ customerPositionsay ] );
}

console.log(names);

// names = ["Karol", "Steffen", "Julius"]
// 3. Print the names



console.log("-----");
