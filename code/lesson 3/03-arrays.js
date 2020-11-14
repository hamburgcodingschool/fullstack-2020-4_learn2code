// In an array I can store multiple values
let ages = [12, 16, 18, 20, 22, 23, 25];
console.log(typeof ages);

let age_1 = ages[0];
let age_2 = ages[1];
let age_3 = ages[2];
let age_4 = ages[3];

// E1. Use a for loop to iterate through the values of an array
for (let i = 0; i<7; i++){
    let currentAge = ages[i];
    console.log(currentAge);
}

// E2. Count how many ages are under 18.
// HINT: use a for loop; 
// declare a variable outside the loop to count

let under18 = 0;
let over18 = 0;
let legalAge = 18;

for (let i=0; i<7; i++){
    console.log("What is the value of i? " + i);
    if (ages[i] < legalAge) {
        under18++;
        console.log("Current underage count:" + under18);
    } else {
        over18++;
    }
}

console.log("There are " + count18 + " ages under 18.");