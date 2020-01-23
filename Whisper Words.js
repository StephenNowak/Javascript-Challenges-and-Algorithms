/* 
Write a method whisper_words that takes in an array of words 
and returns a new array containing a whispered version of each 
word.See the examples.Solve this using map:).
*/

function whisperWords(arr) {
    let whispered = [];

    for (i = 0; i < arr.length; i++) {
        whispered.push(arr[i].toLowerCase() + "...");
    }

    return whispered;
}

console.log(whisperWords(["KEEP", "The", "NOISE", "down"])); // => ["keep...", "the...", "noise...", "down..."]