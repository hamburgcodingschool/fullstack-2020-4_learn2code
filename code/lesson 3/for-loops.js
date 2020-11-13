


for (i=0; i<5; i++){
    console.log(i);
}


for (i=0; i<5; i++){
    if (i === 4){
        console.log("Five")
    }
}

for (i=10; i<=20; i++){
    if (i % 2 === 0){
        console.log("#")
    } else {
        console.log("!!")
    }
}

let stringVariable = '';
for (i=10; i<=20; i++){
    if (i % 2 === 0){
        stringVariable += "#"
    } else {
        stringVariable += "!!"
    }
}

console.log(stringVariable)

// for (i=30; i>10; i--){
//     console.log(i)
// }