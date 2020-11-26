
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let input = "AabcA hi i am paul xyz";
let output = '';


// 1. iterate through the input letter by letter
for (let i=0; i < input.length; i++){
    let currentLetter = input[i];
    if (alphabet.includes(currentLetter)){
        let index = alphabet.indexOf(currentLetter);
        let newIndex = index + 3;
        if (newIndex >= alphabet.length){
            newIndex = newIndex % alphabet.length;
        }
        output = output + alphabet[newIndex];
    }
    else {
        output = output + currentLetter;
    }
}

console.log(output);
