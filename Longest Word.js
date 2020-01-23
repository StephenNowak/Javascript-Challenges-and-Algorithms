/*
Have the function LongestWord(sen) take the sen parameter 
being passed and return the largest word in the string. 
If there are two or more words that are the same length, 
return the first word from the string with that length. 
Ignore punctuation and assume sen will not be empty.
*/

function LongestWord(sen) {
    let wordsArr = sen.split(" ");
    let words = [];


    for (let j = 0; j < wordsArr.length; j++) {
        words.push(removeNonChars(wordsArr[j]));
    }


    let start = [words[0]];

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > start[0].length) {
            start[0] = words[i];
        } else if (start[0].length == words[i].length) {
            start[0] = start[0];
        }
    }

    return start.join(" ");
}


function removeNonChars(word) {
    let newStr = "";
    let alphabet = "abcdefghijklmnopqrstuvwxyz1234567890";

    for (let i = 0; i < word.length; i++) {
        if (alphabet.includes(word[i])) {
            newStr += word[i];
        }
    }

    return newStr;
}


console.log(LongestWord("fun&!! time"));
console.log(LongestWord("i love dogs"));  
console.log(LongestWord("123456789 98765432"));