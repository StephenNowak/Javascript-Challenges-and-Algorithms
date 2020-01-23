/* 
Write a function consonant_cancel that takes in a sentence and 
returns a new sentence where every word begins with it's first vowel.
*/


function consonantCancel(str) {
    let words = str.split(" ");
    let newWords = [];
    
    for (i = 0; i < words.length; i++) {
        newWords.push(conCan(words[i]));
    }

    return newWords.join(" ");
}
 
function conCan(word) {
    let vowels = "aeiouAEIOU";

    for (j = 0; j < word.length; j++) {
        if (vowels.includes(word[j])) {
            return word.slice(j, word.length);
        }
    }
}



console.log(consonantCancel("down the rabbit hole")); // "own e abbit ole"
console.log(consonantCancel("writing code is challenging")); // "iting ode is allenging"