// similarities: they can all be used to define variables (and constants)
var name = "Paul";
let age = 20;
const height = 1.5;

// differences
// let and var allow us to redefine variables
name = "Jon";
age = 30;

// const does not allow us to redefine variables
// height = 1.6;        // this will crash

// let vs var:
// var allows us to redeclare the same variable name
var name = "Tom";
// let does NOT allow us to redeclare the same variable name
// let age = 30;       // this will crash



// scope: where is a variable 'visible'
// let is block scoped
// for (let i=0; i<5; i++){
for (var i=0; i<5; i++){
    console.log(i);
}
console.log(i);


if (true){
    // does not work
    // let shoeSize = 356;
    var shoeSize = 355;
}

console.log(shoeSize);