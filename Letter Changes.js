/*
Have the function LetterChanges(str) take the str parameter being passed 
and modify it using the following algorithm. Replace every letter in the 
string with the letter following it in the alphabet (ie. c becomes d, z becomes a). 
Then capitalize every vowel in this new string (a, e, i, o, u) and finally return 
this modified string.
*/


function LetterChanges(str) {
    let vowels = "aeiou";
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let shuffled = "";
    let vowelShuffled = "";

    for (i = 0; i < str.length; i++) {
        if (alphabet.includes(str[i])) {
            let old_idx = alphabet.indexOf(str[i]);
            let new_idx = old_idx + 1;
            let new_char = alphabet[new_idx % alphabet.length];
            shuffled += new_char;
        } else (shuffled += str[i]);
    }


    for (j = 0; j < shuffled.length; j++) {
        if (vowels.includes(shuffled[j])) {
            vowelShuffled += shuffled[j].toUpperCase();
        } else (vowelShuffled += shuffled[j]);
    }


    return vowelShuffled;

}

console.log(LetterChanges("hello*3"));
console.log(LetterChanges("fun times!"));
console.log(LetterChanges("a confusing /:sentence:/[ this is not!!!!!!!~"));
// b dpOgvtjOh /:tfOUfOdf:/[ UIjt jt OpU!!!!!!!~
console.log("/////////////////////////////////////////");