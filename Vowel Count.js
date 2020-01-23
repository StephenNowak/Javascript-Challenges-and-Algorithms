/*
Count Vowels
Write a function that takes in a word str and counts that amount of 
vowels that appear in the str.
*/

function countVowels(word) {
    let vowels = "aeiouAEIOU";
    let count = 0;

    for (i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            count += 1;
        }
    }

    return count;
}

console.log(countVowels("Animal Planet"));
console.log(countVowels("Octopus"));
console.log(countVowels("Helicopter"));
console.log("/////////////////////////////////////////");