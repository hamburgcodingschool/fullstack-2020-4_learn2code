let book1 = {
    title: "The Godfather",
    price: 30
}

let book2 = {
    title: "Gone with the wind",
    price: 40
}

let books = [book1, book2]

// increasePrice by 10% for each of the books in the array

// for (let i=0; i<books.length; i++){
//     increasePrice(books[i]);
// }

console.log(books);

function increasePrice(book){
    book.price += 10/100 * book.price
}

books.forEach(increasePrice);

console.log(books);