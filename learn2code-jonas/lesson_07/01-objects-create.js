// this is an empty object
let guitar = {};

// console.log("\n-----\n");

// console.log( "The object has the type: " + typeof guitar);

// console.log("\n-----\n");


let puzzle = {
    price: 25,
    name: "Beautiful Unicorns in the sunset.",
    currency: "EUR"
};

// console.log( puzzle );
// console.log( puzzle.name );
// console.log( `The puzzle costs: ${puzzle.price} ${puzzle.currency}` );


// console.log("\n-----\n");


// E1: try it with an object
// 1.1 add 2 properties to the user object: one number (e.g. age) and one boolean (e.g. germanCitizenship)
// 1.2 print the person's name, age and citizenship using template literals

let user = {
    firstName: "Thomas",
    lastName: "Hummel",
    age: 47,
    germanCitizenship: true,
    job: {
        city: "Hamburg",
        type: "Software Development"
    }
};

// console.log("The name is " + user.firstName + ", the age is " + user.age + ". and his status as a germn citizen is: " + user.germanCitizenship );
// console.log( `The name of the user is ${user.firstName}, his age is ${user.age} and the status as a german citizen is: ${user.germanCitizenship} and his job is ${user.job.type}.` );


console.log("\n-----\n");



// E2. You are given an array of user objects:  
// 2.1 Print the name of the first user in the array
// 2.2 Print the age of the last user in the array
// 2.3 Find the name of the oldest user in the array
// 2.4 Find the name of the oldest user who is also german

let user1 = {
    firstName: "Paul",
    lastName: "Anton",
    age: 27,
    germanCitizenship: true
};

let user2 = {
    firstName: "Oliver",
    lastName: "G",
    age: 32,
    germanCitizenship: true
};

let user3 = {
    firstName: "Gabriela",
    lastName: "M",
    age: 25,
    germanCitizenship: false
};

let user4 = {
    firstName: "Jonas",
    lastName: "S",
    age: 40,
    germanCitizenship: false
};

// console.log(user1)
// console.log(user2)
// console.log(user3)

users = [ user1, user2, user3, user4 ];

// Print the number of the users in the array
// console.log(`There are ${users.length} objects in the users array.`);

// 2.1 Print the name of the first user in the array
console.log(`The first user object in the array is: ${users[0].firstName}`);

// 2.2 Print the age of the last user in the array
console.log(`The age of the last user in the array is: ${users[users.length - 1].age}`);

// 2.3 Find the name of the oldest user in the array
// let highestAge = 0;
// for (let i = 0; i < users.length; i++) {
//     if (users[i].age > highestAge) {
//         highestAge = users[i].age;
//         // console.log(`The age of the oldest user inside the array is: ${highestAge}.`);
//     }
// };

// console.log(`The age of the oldest user in the array is: ${highestAge}.`);


// 2.4 Find the name of the oldest user who is also german

// let oldestGermanUser = "";
// for (let i = 0; i < users.length; i++) {
//     if (users[i].age === highestAge && users[i].germanCitizenship === true) {
//         highestAge = users[i].age;
//         oldestGermanUser = users[i].firstName;
//     }
// };

// console.log(`The name of the oldest german user in the array is: ${oldestGermanUser}.`);


// 2.5 Combine 2.3 and 2.4 into one block
let highestAge = 0;
let oldestGermanUser = "";
for (let i = 0; i < users.length; i++) {
    if ( users[i].germanCitizenship === true && users[i].age > highestAge ) {
        highestAge = users[i].age;
        oldestGermanUser = users[i].firstName;
    }
};

console.log(`The age of the oldest user in the array is: ${highestAge}.`);
console.log(`The name of the oldest german user in the array is: ${oldestGermanUser}.`);



