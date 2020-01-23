/*
An anagram is a word or phrase formed by rearranging the letters of a 
different word or phrase. For example, "Sool" is an anagram for "Solo."

A palindrome is a word or phrase which reads the same backwards as it 
does forwards, such as "madam."

An anadrome is a word or phrase if any any of its anagrams is also a palindrome.

For example: 
"SoloSolo" is an anadrome because "SoollooS" is an anagram of "SoloSolo"
which is also a palindrome.

"3haha is an anadrome because "ha3ha" is an anagram of "3haha" which is 
also a palindrome.

"Solo" is not an anadrome.
*/

function anadrome(word) {
    
}

console.log(anadrome("Solo")); //false
console.log(anadrome("SoloSolo")); //true
console.log(anadrome("3haha")); //true
