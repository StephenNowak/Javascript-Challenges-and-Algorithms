/*
Have the function LetterCapitalize(str) take the str parameter being 
passed and capitalize the first letter of each word. Words will be separated 
by only one space
*/

function LetterCapitalize(str) {
    let words = str.split(" ");
    let proper = [];

    for (i = 0; i < words.length; i++) {
        proper.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
    }

    return proper.join(" ");
}

console.log(LetterCapitalize("hello world"));
console.log(LetterCapitalize("h3llo yo people"));
console.log(LetterCapitalize("yooooooo hi"));
console.log(LetterCapitalize("thisiscool"));
console.log(LetterCapitalize("oxford comma"));
console.log("/////////////////////////////////////////");