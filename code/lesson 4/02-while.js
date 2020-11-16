let i = 0;

// While Loops: "While something is true, do something else".

while (i<5){
    console.log(i);
    i++;
}

// equivalent for loop:
for (i=0; i<5; i++){
    console.log(i);
}

// WHEN to use which?
// For loops - when we know how many times we want to iterate
// While loops - when we do NOT know how many times we want to iterate

// this loop will run forever! Watch out with your computer!
// Ctrl + C to stop it
i = 0;
while (true) {
    console.log("On and on and on...")
    console.log(i);
    i++;
}

