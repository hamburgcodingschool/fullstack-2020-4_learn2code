// Objects are collections of properties
// Creating objects

// the empty object

let guitar = {};
console.log(typeof guitar);

let puzzle = {
    price: 25,
    name: "Beautiful Unicorns in the Sunset", 
    currency: "EUR"
};

console.log(puzzle);

console.log("The puzzle costs " + puzzle.price + " and it is called " + puzzle.name);
console.log(`The puzzle costs ${puzzle.price} and it is called ${puzzle.name}`);


// E1: try it with an object
// 1.1 add 2 properties to the user object: one number (e.g. age) and one boolean (e.g. germanCitizenship)
// 1.2 print the person's name, age and citizenship using template literals

let user = {
    age: 25,
    germanCitizenship: true,
    firstName: "Thomas",
    lastName: "Hummel",
    
}

console.log("The name is " + user.firstName + " and the age is " + user.age);
console.log(`The name is ${user.firstName} and age is ${user.age} and citizenship: ${user.germanCitizenship}`);