
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
    language: "english",
    currency: "EUR"
}

let book2 = {
    title: "Vom Winde verweht",
    price: 40,
    language: "german",
    currency: "EUR"
}

let books = [ book1, book2 ];



function printBookLanguage(book) {
    let bookLanguage = book.language;
    // console.log(bookLanguage);
    return bookLanguage;
}

// printBookLanguage(book1);
// printBookLanguage(book2);


function printBookDetailsInBookLanguage(book) {
    if (printBookLanguage(book) === "german") {
        console.log(`Dieses Buch heisst "${book.title}" und kostet ${book.price} ${book.currency}.`);
    } else if (printBookLanguage(book) === "english") {
        console.log(`This book is called "${book.title}" and it costs ${book.price} ${book.currency}.`);
    }
}

printBookDetailsInBookLanguage(book1);
printBookDetailsInBookLanguage(book2);


// E2. Write a function that takes two parameters: a book and a number (percentage): 
// 2.1 Increases the price of the book with that percentage

function increasePriceByPercentage(book, percentage) {
    // book.price = book.price + (book.price / 100 * percentage);
    book.price += 10/100 * book.price;
}

increasePriceByPercentage(book1, 10);

printBookDetailsInBookLanguage(book1);




console.log(books);
