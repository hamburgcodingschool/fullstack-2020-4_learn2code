let person = {
    firstName: "Paul",
    lastName: "Anton",
    age: 28,
    job:
        { city: "Hamburg" },
    bikes: ["Mountain Bike", "Road bike", "Cyclo Cross", "Racing bike"],
    minutesOnSocialMedia: [45, 65, 70, 120, 300]
}

console.log(person.bikes);

// 4.1 write one line of code to print how many bikes the user has (the count of bikes)
console.log("\n-----\n");
console.log(`${person.firstName} has ${person.bikes.length} bikes.`)

// 4.2 write code to calculate the total amount of time spent on social media
console.log("\n-----\n");

person.minutesOnSocialMediaCount = 0;
for (let i = 0; i < person.minutesOnSocialMedia.length; i++) {
    person.minutesOnSocialMediaCount += person.minutesOnSocialMedia[i];
}

console.log(`${person.firstName} spent ${person.minutesOnSocialMediaCount} minutes on social media so far.`)

// 4.3 write a fucntion that takes an object as a parameter and returns the sum of his minutes on social media to calculate the total amount of time spent on social media

function getUsersMinutesOnSocialMedia(personObject) {
    personObject.minutesOnSocialMediaCount = 0;
    for (let i = 0; i < personObject.minutesOnSocialMedia.length; i++) {
        personObject.minutesOnSocialMediaCount += personObject.minutesOnSocialMedia[i];
    }
    return personObject.minutesOnSocialMediaCount
}

// let minutesPerson1 = getUsersMinutesOnSocialMedia(person);
console.log(`The person spent ${getUsersMinutesOnSocialMedia(person)} on social media.`);
console.log("\n-----\n");
console.log("The object person looks as follows:");
console.log(person);

// End of file and logs

console.log("\n-----\n");