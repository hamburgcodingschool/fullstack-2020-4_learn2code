// Accessing Properties

let user = {
    age: 25,
    germanCitizenship: true,
    firstName: "Thomas",
    lastName: "Hummel",
    
}

let values = [15, 16, 17];

console.log(user.blip);

user.age=27;
user.city = "Hamburg";
values[0] = 155;
user.property = ""

console.log(user);

// trying to access a property that does not exist:
// results in undefined
console.log(user2.blip)