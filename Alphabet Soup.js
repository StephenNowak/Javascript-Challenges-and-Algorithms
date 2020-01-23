/*
is palindrome
Write a function that determines if a word is spelled the same backwards
as it is forwards. 
*/


function isPalindrome(word) {
    let reversed = word.split("").reverse().join("");

    return reversed == word;
}

console.log(isPalindrome("kayak"));
console.log(isPalindrome("pepper"));
console.log(isPalindrome("mountain"));
console.log("/////////////////////////////////////////");