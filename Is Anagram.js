/*
Write a function anagrams ? that takes in two words and returns a boolean indicating whether or 
not the words are anagrams.Anagrams are words that contain the same characters but not necessarily 
in the same order.
*/

function isAnagram(str1, str2) {
    return (sortChars(str1) == sortChars(str2));
}

function sortChars(str) {
    return str.split("").sort().join("");
}


console.log(isAnagram("cat", "act"));
console.log(isAnagram("restful", "fluster"));
console.log(isAnagram("cat", "dog"));

