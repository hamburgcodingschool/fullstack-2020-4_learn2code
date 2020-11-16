// let's start with an empty array

let prices = [];

prices.push(1000);
prices.push(1200);
prices.push(1600);
prices.push(1800);
prices.push(2000);

console.log(prices.length);
console.log(prices);

let numbers = []
for (let i=5; i<37; i+=5){
    numbers.push(i);
}

console.log(numbers.length);
console.log(numbers);

// create an array from another array;
let source = [2400, 1800, 6000, 8000, 1600]
let destination = []

// E1. Iterate through the values in the source array;
// Copy the values larger than 2000 to the destination array;

for (let i = 0; i<source.length; i++) {
    let currentValue = source[i];
    if (currentValue > 2000) {
        destination.push(currentValue);
    }
}




// E2. Can I please get a list of all customer names who have made a purchase larger than 2000?

let purchases = [1300, 1500, 2100, 2400, 1000, 2500, 6000];
let customers = ["Andreas", "Lina", "Karol", "Steffen", "Thomas", "Julius", "Paul"];

let positions = [];
// 1. Find the positions at which the purchases > 2000 are.
for (let i = 0; i<purchases.length; i++){
    let currentPurchase = purchases[i];
    if (currentPurchase > 2000){
        positions.push(i);
    }
}
console.log(positions);
// positions = [2, 3, 5]

let names = [];
// 2. Use the positions to extract the names from the list of customers.
for (let i = 0; i < positions.length; i++){
    let customerPosition = positions[i];    // 2
    names.push(customers[customerPosition]);
}
console.log(names);
// names = ["Karol", "Steffen", "Julius"]

// 3. Print the names