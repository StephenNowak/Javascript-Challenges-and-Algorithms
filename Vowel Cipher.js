/*
vowels cipher
Write a function that takes in a str and num and returns the str with the 
vowels shifted num times 
*/

function vowelCipher(str, num) {
    let vowels = "aeiou";
    let new_str = "";

    for (i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            let old_idx = vowels.indexOf(str[i]);
            let new_idx = old_idx + num;
            let new_char = vowels[new_idx % vowels.length];
            new_str += new_char;
        } else (new_str += str[i]);
    }

    return new_str;
}

console.log(vowelCipher("aeiou", 0));
console.log(vowelCipher("aeiou", 1));
console.log(vowelCipher("combat", 2));
console.log(vowelCipher("octopus", 4));
console.log("/////////////////////////////////////////");