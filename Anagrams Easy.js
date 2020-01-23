/* 
Write a method anagrams? that takes in two words and returns a 
boolean indicating whether or not the words are anagrams. Anagrams are 
words that contain the same characters but not necessarily in the same 
order. Words may contain numbers or capital letters. 
*/

function Anagrams (str1, str2) {
    let sorted1 = str1.toLowerCase().split("").sort().join("");
    let sorted2 = str2.toLowerCase().split("").sort().join("");

    return sorted1 == sorted2;

}

console.log(Anagrams("Kayak", "akAky"));
console.log(Anagrams("dog", "cAt"));
console.log(Anagrams("12345", "54321"))