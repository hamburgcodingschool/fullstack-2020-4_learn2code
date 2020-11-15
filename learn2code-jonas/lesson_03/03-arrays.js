let ages = [12, 16, 18, 20, 22, 23, 25]

console.log(typeof ages);

let age_1 = ages[0];
console.log(age_1);

let age_2 = ages[0];
console.log(age_2);


// console.log("-----");

// E1
// for ( let i = 0; i < 7; i++) {
//     let currentAge = ages[i];
//     console.log(currentAge);
// }

console.log("-----");

// E2
let countUnder18 = 0;
let countOver18 = 0;
let legalAge = 18;

for ( let i = 0; i < ages.length; i++) {
    let currentAge = ages[i];
    // console.log(currentAge);
    if (currentAge < legalAge) {
        countUnder18++;
        // console.log(currentAge);
    } else {
        countOver18++;
    }
}
console.log( "There are " + countUnder18 + " ages under and " + countOver18 + " ages over " + legalAge + "." );


