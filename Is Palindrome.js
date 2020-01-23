/*
is palindrome
Write a function that determines if a word is spelled the same backwards
as it is forwards. 
*/


function isPalindrome(word) {
    let reversed = "";

    for (i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
    }

    return reversed == word;
}

console.log(isPalindrome("kayak"));
console.log(isPalindrome("pepper"));
console.log(isPalindrome("mountain"));
console.log("/////////////////////////////////////////");