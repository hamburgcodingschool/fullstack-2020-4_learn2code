let book1 = {
    title: "Gone with the wind",
    price: 30
}

let book2 = {
    title: "Gone with the wind",
    price: 40
}

console.log(book1.price);
console.log(book2.price);

// book1.price += 15;
// book2.price += 15;
// book2.price += 15;
// book2.price += 15;
// book2.price += 15;
// book2.price += 15;
// book2.price += 15;
// book2.price += 15;


console.log ("#####")
console.log(book1.price);
console.log(book2.price);

function increasePriceBy20(book) {
    book.price += 20;
}

increasePriceBy20(book1);
increasePriceBy20(book2);
// increasePriceBy20(book1);
// increasePriceBy20(book2);
// increasePriceBy20(book1);
// increasePriceBy20(book2);
// increasePriceBy20(book1);
// increasePriceBy20(book2);
// increasePriceBy20(book1);
// increasePriceBy20(book2);

console.log ("#####")
console.log(book1.price);
console.log(book2.price);


