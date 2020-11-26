let book1 = {
    title: "The Godfather",
    price: 30
}

let book2 = {
    title: "Gone with the wind",
    price: 40
}

let books = [book1, book2]

console.log(books);

function increasePrice(book){
    book.price += 10/100 * book.price
}

books.forEach(increasePrice);

console.log(books);

books.forEach(bookParameter => {
    bookParameter.price += 10/100 * bookParameter.price
})













// let a = 1;
// let b = 2;
// const sumOfTwoNumbers = (a, b) => {
//     return a + b;
// }

// function sumOfTwoNumbers(a, b){
//     return a + b;
// }
