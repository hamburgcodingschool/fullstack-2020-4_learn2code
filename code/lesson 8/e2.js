
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


// E3
// 3.1 Write a function that increases the year of all books by 1 (optional: arrow function)
// 3.2 Write a function that converts all authors' first names to lowercase
// 3.3 Write a function that converts all authors' last names to uppercase

function increaseYearByOne(book){
    book.year+=1;
}

books.forEach(increaseYearByOne);

console.log(books);

books.forEach(bookParameter =>{
  bookParameter.year +=1;
})

function authorFirstNamesToLowerCase(book){
  book.author.firstName = book.author.firstName.toUpperCase();
}

books.forEach(authorFirstNamesToLowerCase);

console.log(books);
