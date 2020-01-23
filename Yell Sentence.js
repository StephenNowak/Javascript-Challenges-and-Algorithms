/* 
Write a method yell_sentence that takes in a sentence string 
and returns a new sentence where every word is yelled. See the 
examples.Use map to solve this.
*/

function yellSentence(str) {
    let words = str.split(" ");
    let yelled = [];

    for (i = 0; i < words.length; i++) {
        yelled.push(words[i].toUpperCase() + "!");
    }

    return yelled.join(" ");
}

console.log(yellSentence("I have a bad feeling about this")); // "I! HAVE! A! BAD! FEELING! ABOUT! THIS!"