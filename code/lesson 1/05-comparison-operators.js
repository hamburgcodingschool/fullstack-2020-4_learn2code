console.log('Hello, World!');

// Operators

// Comparison Operators
// == != < <= > >=

a = 4;
b = 4;
c = 5;

ab = a == b;
ac = a == c;

console.log("The result of a == b " + ab);
console.log("The result of a == c " + ac);

// E6: use the != operator to check if 1 is different than 21 % 4
rest = (21 % 4);

if (rest != 0){
    console.log("True!");
} else {
    console.log("False!");
}

if (0 == 2){
    console.log("True!");
} else {
    console.log("False!");
}


// Comparison Operators
// == != < <= > >=

// E7: Input: the year 1990. Use if/else to print "Older" if you are born before that, "Younger", if you are born after 1990. If you are born IN 1990: print "BINGO"

year = 1990;
age = 28;

currentYear = 2020;
difference = currentYear - year;

if (age == difference){
    console.log("BINGO");
} else if (age < difference){
    console.log("Younger");
} else if (age > difference){
    console.log("Older");
}