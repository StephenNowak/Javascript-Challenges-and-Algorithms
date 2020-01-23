/*
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, 
ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) 
and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
*/



function palindrome(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let alphaOnly = "";

    for (let i = 0; i < str.length; i++) {
        if (alphabet.includes(str[i])) {
            alphaOnly += str[i];
        }
    }

    let loweredAlpha = alphaOnly.toLowerCase();
    let reversed = loweredAlpha.split("").reverse().join("");

    return loweredAlpha == reversed;
}


console.log(palindrome("eyE")); //true
console.log(palindrome("_eye")); //true
console.log(palindrome("race car")); //true
console.log(palindrome("0_0 (: /-\ :) 0-0")); //true
console.log(palindrome("My age is 0, 0 si ega ym.")); //true
console.log(palindrome("animal")); //false
console.log(palindrome("not a palindrome")); //false
console.log(palindrome("1 eye for of 1 eye.")); //false
console.log(palindrome("five |\_ /| four")); //false
console.log(palindrome("nope")); //false


/* Alternate solve

function palindrome(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz1234567890";
    let myStr = str.toLowerCase();
    let newStr = "";
    
    for (let i = 0; i < myStr.length; i++) {
        if (alphabet.includes(myStr[i])) {
            newStr += myStr[i];
        }
    }
    let reversed = newStr.split("").reverse().join("");

    return newStr == reversed;
}

*/