
// E0. 
// 0.1 Add another property to each book object. e.g. language
// 0.2 Write a function that prints the book language.
// 0.3 Write a function that prints the book details in the language in which the book is written: 

// if the language of the book is "english", print the message in english:
// "The price of the book is ... and the title is ..."

// if the language of the book is "german", print the message in german


let book1 = {
    title: "Gone with the wind",
    price: 30,
    language: "english"
}

let book2 = {
    title: "Gone with the wind",
    price: 40,
    language: "german"
}

function printBookLanguage(book){
    console.log(book.language);
}

function printBookDetailsInBookLanguage(book){
    if (book.language === "english"){
        console.log("print a message in english " + book.title);
    } 
    if (book.language === "german") {
        console.log("das Buch heisst"  + book.title);
    }
}

printBookLanguage(book1);
printBookDetailsInBookLanguage(book2)