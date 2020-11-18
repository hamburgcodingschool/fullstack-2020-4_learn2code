// break - used to interrupt the iterations

// for (let i=0; i<10; i++){
//     console.log(i);
//     if (i===3){
//         break;
//     }
//     // console.log(i);
// }

// // continue - used to skip one iteration
// for (let i=0; i<10; i++){
//     if (i===3) {
//         continue;
//     }
//     console.log(i);
// }

let ages = [12, 13, 14, 20, 14, 18, 37, 12]
// Find IF there is at least ONE person over 18.

for (let i=0; i<ages.length; i++){
    console.log(i);
    console.log(ages[i]);
    if (ages[i]>18){
        console.log("Yes! There is one person older than 18");
        break;
    }
}
console.log("loop ended");