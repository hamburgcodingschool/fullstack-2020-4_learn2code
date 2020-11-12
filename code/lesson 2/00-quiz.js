
// 6 

let x = 5;
x = x * 173;
x = x % 4;
console.log(x);


// 7

let a = 2;

console.log(a == '2');   // '2' is equal to '2'?
console.log(a === '2');  //  2  is equal to '2'?


// 8 - What happens here?

a = "something"; // evaluated to True

if (a = "somethingelse"){
  console.log("True");
} else{
  console.log("False");
}
