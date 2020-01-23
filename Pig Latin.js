/* 
Write a method pig_latin_word that takes in a word string 
and translates the word into pig latin.

Pig latin translation uses the following rules:
- for words that start with a vowel, add 'yay' to the end
- for words that start with a nonvowel, move all letters before the first vowel to the end of the word and add 'ay'
*/

function pigLatin(str) {
    let translated = "";
    let words = str.split(" ");
    let vowels = "aeiouAEIOU";

    for (i = 0; i < words.length; i++) {
        if (vowels.includes(words[0][0])) {
            translated += words[0] + "yay";
        }
    }

    return translated;
}

console.log(pigLatin("Friends, Romans, countrymen.. Lend me your ears."));
console.log(pigLatin("apple"));
console.log(pigLatin("eat"));
console.log(pigLatin("banana"));
console.log(pigLatin("trash"));





/* 
Write a method pig_latin_word that takes in a word string 
and translates the word into pig latin.

Pig latin translation uses the following rules:
- for words that start with a vowel, add 'yay' to the end
- for words that start with a nonvowel, move all letters before the first vowel to the 
  end of the word and add 'ay'
*/

// function pigLatin(str) {
//     let vowels = "aeiouAEIOU";
//     let pigged = "";
  
//     for (let i = 0; i < str.length; i++) {
//       if (vowels.includes(str[0])) {
//         pigged = str + "yay";
//       }
//       else if (vowels.includes(str[i])) {
//         let part1 = str.slice(0, i);
//         let part2 = str.slice(i);
//         pigged = part2 + part1 + "ay";
//         break
//       }
//     }
  
//     return pigged;
//   }
  
//   console.log(pigLatin("Friends, Romans, countrymen.. Lend me your ears."));
//   console.log(pigLatin("apple"));
//   console.log(pigLatin("eat"));
//   console.log(pigLatin("banana"));
//   console.log(pigLatin("trash"));








/* 
Write a method pig_latin_word that takes in a word string 
and translates the word into pig latin.

Pig latin translation uses the following rules:
- for words that start with a vowel, add 'yay' to the end
- for words that start with a nonvowel, move all letters before the first vowel to the end of the word 
  and add 'ay'
*/

// function pigLatin(str) {
//     let words = str.split(" ");
//     let new_words = [];
  
//     for (let j = 0; j < words.length; j++) {
//       new_words.push(pigTranslate(words[j]));
//     }
  
//     return new_words.join(" ");
//   }
  
  
//   function pigTranslate (string) {
//     let translated = "";
//     let vowels = "AEIOUaeiou"
    
//     for (let i = 0; i < string.length; i++) {
//       if (vowels.includes(string[0])) {
//         translated = string + "yay";
//       }
//       else if (vowels.includes(string[i])) {
//         translated = string.slice(i) + string.slice(0, i) + "ay";
//         break 
//       }
//     }
  
//     return translated
//   }
  
  
//   console.log(pigLatin("Friends Romans countrymen Lend me your ears."));
//   console.log(pigLatin("apple"));
//   console.log(pigLatin("eat"));
//   console.log(pigLatin("banana"));
//   console.log(pigLatin("trash"));
