// objects can have arrays as properties

let person = {
    firstName: "Paul",
    lastName: "Anton",
    age: 28,
    job:
        {city: "Hamburg"},
    bikes: ["Mountain Bike", "Road bike", "Cyclo Cross"],
    minutesOnSocialMedia: [45, 65, 70, 120, 300]
}

console.log(person.bikes);



// 4.1 write one line of code to print how many bikes the user has
// 4.2 calculate and print the total amount of time spent on social media
// 4.3 Optional: write each of the points above in a function that takes as parameter a person object

function calculateSum(personParameter){
    let sum = 0;
    for (let i = 0; i<personParameter.minutesOnSocialMedia.length; i++){

    }
    
    return sum;
}
