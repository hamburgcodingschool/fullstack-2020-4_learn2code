
let books = [
    {
        pages: 200,
        year: 2020,
        author: {
            firstName: "Paul",
            lastName: "Anton"
        },
        language: "DE"    
    },
    {
        pages: 230,
        year: 2020,
        author: {
            firstName: "Oliver",
            lastName: "G"
        },
        format: "DE"    
    },
]

console.log(books);


console.log("\n-----\n");


// E3
// 3.1 Write a function that increases the year of all books by 1 (optional: arrow function)
// 3.2 Convert all author's first names to lowercase
// 3.3 Convert all author's last names to uppercase


// 3.1 as function with foreach method and arrow function inside
function increaseYearByOne(arrayOfObjects) {
    arrayOfObjects.forEach(element => { 
        element.year += 1;
    });
}
// increaseYearByOne(books);


// 3.1 As arrow function
books.forEach( element => element.year += 1 );


// 3.1 as standard function

function increaseYearBy1(object) {
    object.year += 1;
}

books.forEach( increaseYearBy1 );



// 3.2 

function convertAuthorsFirstnameToLowerCase( object ) {
    object.author.firstName = object.author.firstName.toLowerCase();
}

// books.forEach( convertAuthorsFirstnameToLowerCase );



// 3.3

function convertAuthorsLastnameToUpperCase( object ) {
    object.author.lastName = object.author.lastName.toUpperCase();
}

// books.forEach( convertAuthorsLastnameToUpperCase );


books.forEach(element => {
    element.author.firstName = element.author.firstName.toLowerCase();
    element.author.lastName = element.author.lastName.toUpperCase();

});

console.log("\n-----\n");


// Print all books objects to the console
console.log(books);


console.log("\n-----\n");