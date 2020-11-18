// functions can return booleans

// functions can return numbers
function add(a, b){
    let sum = a+b;
    return sum;
}

let result = add(5,4);
console.log(result);


// functions can return strings

// Add a parameter to this function and make the function return "Hello Name"
// We want to call this function with any Name
// "Hello Eva" "Hello Ninja"

function hello(parameter1){
    console.log("Function called with " + parameter1);
    let text = "Hello " + parameter1;
    return text;
}

console.log(hello("Nail"));
console.log(hello("Eva"));
console.log(hello("Oliver"));




// functions can return objects

