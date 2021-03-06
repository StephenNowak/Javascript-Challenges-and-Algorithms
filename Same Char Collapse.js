/*
Write a function same_char_collapse that takes in a string and 
returns a collapsed version of the string. To collapse the string, 
we repeatedly delete 2 adjacent characters that are the same until 
there are no such adjacent characters. If there are multiple pairs 
that can be collapsed, delete the leftmost pair. For example, we take 
the following steps to collapse "zzzxaaxy": zzzxaaxy -> zxaaxy -> zxxy -> zy
*/

function sameCharCollapse(str) {
    let collapsible = true;
 
    while (collapsible) {
        collapsible = false;
        let letters = str.split("");
        for (i = 0; i < letters.length; i++) {
            if (letters[i] == letters[i + 1]) {
                letters[i] = "";
                letters[i + 1] = "";
                collapsible = true;
                break;
            }
        }
        str = letters.join("");
    }
    return str;
}


console.log(sameCharCollapse("zzzxaaxy")); // "zy" ===> because zzzxaaxy -> zxaaxy -> zxxy -> zy
console.log(sameCharCollapse("uqrssrqvtt")); // "uv" ===> because uqrssrqvtt -> uqrrqvtt -> uqqvtt -> uvtt -> uv