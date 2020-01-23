/*
One of the simplest and most widely known ciphers is a Caesar cipher, 
also known as a shift cipher. In a shift cipher the meanings of the 
letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters
are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character 
(i.e. spaces, punctuation), but do pass them on.
*/


function rot13(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let myStr = str.toLowerCase();
    let newStr = "";

    for (let i = 0; i < myStr.length; i++) {
        if (alphabet.includes(myStr[i])) {
            let old_idx = alphabet.indexOf(myStr[i]);
            let new_idx = old_idx + 13;
            let new_char = alphabet[new_idx % alphabet.length];
            newStr += new_char;
        } else {
            newStr += myStr[i]
        }
    }
    return newStr.toUpperCase();
}

console.log(rot13("SERR PBQR PNZC")); //should decode to FREE CODE CAMP
console.log(rot13("SERR CVMMN!")); //should decode to FREE PIZZA!
console.log(rot13("SERR YBIR?")); //should decode to FREE LOVE?
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); //should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.