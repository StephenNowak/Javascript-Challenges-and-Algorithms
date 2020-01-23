/*
Write a function that takes a word and outputs all possible anagrams
of that word as an array.

For example:
"cat" would produce the following array:
["cat", "cta", "act", "atc", "tac", "tca"]

function getAllPermutations (string)
  define results
  if string is a single character
    add the character to results
    return results
  for each char in string
    define innerPermutations as a char of string
    set innerPermutations to getAllPermutations (without next char)
    foreach string in innerPermutations
      add defined char and innerPermutations char
  return results



  var permArr = [], usedChars = [];
function permute(input) {
  var i, ch, chars = input.split("");
  for (i = 0; i < chars.length; i++) {
    ch = chars.splice(i, 1);
    usedChars.push(ch);
    if (chars.length == 0)
      permArr[permArr.length] = usedChars.join("");
    permute(chars.join(""));
    chars.splice(i, 0, ch);
    usedChars.pop();
  }
  return permArr
};
*/


function anagram(word) {
    let anagrams = [];
    let chars = word.split("");

    if (word.length == 1) {
        anagrams.push(word);
        return anagrams;
    }

    for (let i = 0; i < chars.length; i++) {
        let ele1 = chars[i];
        for (let j = 0; j < chars.length; j++) {
            let ele2 = chars[j];
            let newAnagram = "";
            if (i > j) {
                anagrams.push([ele1, ele2]);
            }
        }
    }
    return anagrams;
}

console.log(anagram("cat"));
console.log(anagram("abc"));
console.log(anagram("a"));