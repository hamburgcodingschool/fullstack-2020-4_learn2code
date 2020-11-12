// E. Define two numeric values. 
// Compare them using the == to their string equivalent.
// Compare them using the === to their string equivalent.
let a = 2;
let b = 3;

// Don't use this one!
console.log(b == '3');

// Use this one!
console.log(b === '3');


// Confusing Example where javascript automatically converts between types

let s1 = 2 + '2';
// '2' + '2' => '22'

console.log("#######");
console.log(s1 == 4);
console.log(s1 == '22');
console.log(s1 === '22');


s2 = 23;
console.log("#######");
console.log(s2 == '23');
console.log(s2 === '23');
