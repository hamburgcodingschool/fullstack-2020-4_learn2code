// what kind of properties can objects have?
// objects can have other objects as properties

let user = {
    age: 25,
    germanCitizenship: true,
    firstName: "Thomas",
    lastName: "Hummel",
    
    job: {
        city: "Hamburg",
        type: "Software Development"
    }

}

console.log(user.job.city);

let jobOfUser = user.job;

jobOfUser.city = "Berlin";
console.log(user);


// we can put objects inside arrays

// E2. You are given an array of user objects:  
// 2.0 Add age and germanCitizenship properties
// 2.1 Print the name of the first user in the array
// 2.2 Print the age of the last user in the array
// 2.3 Find the name of the oldest user in the array
// 2.4 Find the name of the oldest user who is also german

let user1 = {
    firstName: "Paul",
    lastName: "Anton",
    age: 25,
    germanCitizenship: false
};

let user2 = {
    firstName: "Oliver",
    lastName: "G",
    age: 26,
    germanCitizenship: false
};

let user3 = {
    firstName: "Gabriela",
    lastName: "M",
    age: 26,
    germanCitizenship: false
};

console.log(user1)
console.log(user2)
console.log(user3)

users = [user1, user2, user3];

console.log(`There are ${users.length} objects in the users array.`);

console.log("The first user object in the array is: ");
console.log(users[0]);

// for (...)
