// What are loops?

// for (let i = 0; i<=10; i++) {
//     console.log(i);
// }

// console.log("-----");

// E1
// for ( let i = 0; i <= 100; i+=2) {
//     console.log(i);
// }


// E2
// for (let i = 10; i<=100; i++) {
//     var x = i % 2;
//     if (x === 0  ) {
//         console.log("#");
//     } else {
//         console.log("!!")
//     }
// };

// console.log("-----");

// E3
// var stringVariable = "";

// for (let i = 10; i<=100; i++) {
//     if (i % 2 === 0  ) {
//         stringVariable += "#" + i;
//     } else {
//         stringVariable += "!!" + i;
//     }
// };
// console.log(stringVariable);

// console.log("-----");


// E4
var stringVariable = "";

for (let i = 100; i>=0; i--) {
    var x = i % 2;
    if (x === 0  ) {
        stringVariable = stringVariable + "#" + i;
    } else {
        stringVariable = stringVariable + "!!" + i;
    }
};
console.log(stringVariable)

console.log("-----");