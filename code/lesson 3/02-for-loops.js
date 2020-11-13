for (let i=0; i<=10; i++){
    console.log(i);
}
console.log("The loop is over!");

// E1. Make a for loop from 0 to 10. Print every number, include 10!

// E2. Print all even numbers between 10 and 100. An even number is a number
// x for which the following is true: x % 2 === 0

for (let i=10; i<=100; i++){
    // console.log("Starting loop...");
    if (i % 2 === 0){
        console.log("Even number:" + i);
    } 

}

// E2. Print "#" for even numbers; Print "!!" for odd numbers;
for (let i = 10; i <= 100; i++) {
    if (i%2 === 0){
        console.log('#')
    } else {
        console.log('!!')
    }
}

// E3. The console.log prints everything on one line. Let's build a string and print everything on the same line.
let stringVariable = '';
for (let i=10; i<=20; i++){
    if (i%2 ===0){
        stringVariable = stringVariable + "#";
    } else {
        stringVariable = stringVariable + "!!";
    }
    // console.log(stringVariable);
}
console.log(stringVariable);

// E4. Print all numbers from 100 to 0 in descending order.

for (let i = 100; i>0; i--){
    console.log(i);
}