// The AND operator: &&

// the result is true if and only if both conditions are true
// x === 0 && y ===0

// Example from real-life
// If an user wants to receive a newsletter AND he is an user for more than 5 years AND his first name is 'Paul':

let newsletterCheckbox = true;
let userMinDuration = 5;
let userDuration = 6;
let userName = "Paul";
let age = 28;


if (newsletterCheckbox === true && userDuration > userMinDuration && userName === "Paul" && age == "28"){
    console.log("Send newsletter to user!");
} else {
    console.log("Will not send newsletter!");
}

// The OR operator: ||
// the result will be true if one of the conditions is true
// x === 0 || y === 0

// Change the example above to the following: 
// if the user has subscribed to the newsletter OR if he is older than 28: Send him an email
age = 30;
newsletterCheckbox = true;
if (newsletterCheckbox === true || age > 28){
    console.log("Send another newsletter!");
} else {
    console.log("do not send newsletter!");
}

// if (true || false || true || false || true)

if (1 > 2 && (3 === 3 || 3 < 1)){
    console.log("True");
} else {
    console.log("False");
}



// Logical NOT !
// x !== 0

newsletterCheckbox = true;
let forgotPasswordCheckbox = false;

if (newsletterCheckbox === true){
    console.log("The user wants to be subscribed!");
    // do a call to the database
}

if (forgotPasswordCheckbox !== false){
    console.log("Send user a reminder about resetting his password");
    // send an email
}