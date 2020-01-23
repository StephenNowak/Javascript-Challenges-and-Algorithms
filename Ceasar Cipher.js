/*
ceasar cipher
Write a function that takes in a str and a num and returns the str with the 
characters shifted num times to the next character in the alphabet. The function
should account for lowercased and uppercased characters as well as characters
that are not includes in the alphabet such as special characers like !@#$% or numbers. 
*/

function ceasarCipher(str, num) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let lowerCased = str.toLowerCase();
    let newStr = "";

    for (let i = 0; i < lowerCased.length; i++) {
        if (alphabet.includes(lowerCased[i])) {
            let old_idx = alphabet.indexOf(lowerCased[i]);
            let new_idx = old_idx + num;
            let new_char = alphabet[new_idx % alphabet.length];
            newStr += new_char;
        }
    }

    return newStr;
}

console.log(ceasarCipher("yellow", 0));
console.log(ceasarCipher("stephen", 1));
console.log(ceasarCipher("zulu", 6));
console.log(ceasarCipher("october", 10));
console.log(ceasarCipher("abc7def", 1));
console.log(ceasarCipher("ABC390dEf", 1));
console.log("/////////////////////////////////////////");