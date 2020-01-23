/*
Have the function LongestWord(sen) take the sen parameter 
being passed and return the largest word in the string. 
If there are two or more words that are the same length, 
return the first word from the string with that length. 
Ignore punctuation and assume sen will not be empty.
*/

function LongestWord(sen) {
    let wordsArr = sen.split(" ");
    let words = [];


    for (let j = 0; j < wordsArr.length; j++) {
        words.push(removeNonChars(wordsArr[j]));
    }


    let start = [words[0]];

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > start[0].length) {
            start[0] = words[i];
        } else if (start[0].length == words[i].length) {
            start[0] = start[0];
        }
    }

    return start.join(" ");
}


function removeNonChars(word) {
    let newStr = "";
    let alphabet = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < word.length; i++) {
        if (alphabet.includes(word[i])) {
            newStr += word[i];
        }
    }

    return newStr;
}


console.log(LongestWord("fun&!! time"));
console.log(LongestWord("i love dogs"));
console.log("/////////////////////////////////////////");
















/*
Fibonacci sequence
*/
function fibonacci(length) {
    if (length == 0) {
        return [];
    } else if (length == 1) {
        return [1];
    }

    let fibo = [1, 1];

    while (fibo.length < length) {
        fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
    }

    return fibo;
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(4));
console.log(fibonacci(6));
console.log(fibonacci(8));
console.log("/////////////////////////////////////////");










/*
Write a function toInitials that takes in a person's name string 
and returns a string representing their initials.
*/


function toInitials(name) {
    let initials = [];
    let names = name.split(" ");

    for (i = 0; i < names.length; i++) {
        initials.push(names[i][0]);
    }

    return initials.join("");
}

console.log(toInitials("Kelvin Bridges"));
console.log(toInitials("Michaela Yamamoto"));
console.log(toInitials("Mary La Grange"));
console.log("/////////////////////////////////////////");


















/*
Write a function toInitials that takes in a person's name string
and returns a string representing their initials.
*/


function FirstFactorial(num) {
    let factor = 1;
    let i = 1;

    while (i <= num) {
        factor *= i;
        i++;
    }

    return factor;
}

// keep this function call here 
console.log(FirstFactorial(4));
console.log(FirstFactorial(8));
console.log("/////////////////////////////////////////");












/*
is palindrome
Write a function that determines if a word is spelled the same backwards
as it is forwards. 
*/


function isPalindrome(word) {
    let reversed = "";

    for (i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
    }

    return reversed == word;
}

console.log(isPalindrome("kayak"));
console.log(isPalindrome("pepper"));
console.log(isPalindrome("mountain"));
console.log("/////////////////////////////////////////");












/*
Count Vowels
Write a function that takes in a word str and counts that amount of 
vowels that appear in the str.
*/

function countVowels(word) {
    let vowels = "aeiouAEIOU";
    let count = 0;

    for (i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            count += 1;
        }
    }

    return count;
}

console.log(countVowels("Animal Planet"));
console.log(countVowels("Octopus"));
console.log(countVowels("Helicopter"));
console.log("/////////////////////////////////////////");












/*
is valid email
Write a funtion that takes in an email str and determines if it is a valid email.
An email is consider valid if it meets the following criteria:
1. It contains exactly 1 @ symbol
2. It contains only alphanumeric characters or _ before the @ symbol
3. It contains exactly 1 . symbol
4. it contains only "net" or "com" after the .
*/

function isValidEmail(str) {
    let parts = str.split("@");
    if (parts.length > 2) {
        return false;
    }

    let alphabet = ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_");
    let part1 = parts[0];
    let part2 = parts[1];

    for (i = 0; i < part1.length; i++) {
        if (!alphabet.includes(part1[i])) {
            return false;
        }
    }

    let theDot = part2.split(".");
    if (theDot.length != 2) {
        return false;
    }


    return true;
}

console.log(isValidEmail("stephennowak@yahoo.com"));
console.log(isValidEmail("peachez420blaze@420.net"));
console.log(isValidEmail("Carl_da_be5t@gmail.c.om"));
console.log(isValidEmail("cr@ig_Ferguson@gmail.com"));
console.log(isValidEmail("KennethJones*&#!@facebook.com"));
console.log("/////////////////////////////////////////");













/*
ceasar cipher
Write a function that takes in a str and a num and returns the str with the 
characters shifted num times to the next character in the alphabet.
*/

function ceasarCipher(str, num) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let newStr = "";

    for (i = 0; i < str.length; i++) {
        let old_idx = alphabet.indexOf(str[i]);
        let new_idx = old_idx + num;
        let new_char = alphabet[new_idx % alphabet.length];
        newStr += new_char;
    }

    return newStr;
}

console.log(ceasarCipher("yellow", 0));
console.log(ceasarCipher("stephen", 1));
console.log(ceasarCipher("zulu", 6));
console.log(ceasarCipher("october", 10));
console.log("/////////////////////////////////////////");














/*
vowels cipher
Write a function that takes in a str and num and returns the str with the 
vowels shifted num times 
*/

function vowelCipher(str, num) {
    let vowels = "aeiou";
    let new_str = "";

    for (i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            let old_idx = vowels.indexOf(str[i]);
            let new_idx = old_idx + num;
            let new_char = vowels[new_idx % vowels.length];
            new_str += new_char;
        } else (new_str += str[i]);
    }

    return new_str;
}

console.log(vowelCipher("aeiou", 0));
console.log(vowelCipher("aeiou", 1));
console.log(vowelCipher("combat", 2));
console.log(vowelCipher("octopus", 4));
console.log("/////////////////////////////////////////");




















/*
initiate sequence
Write a function that takes in a length and a num and returns an array
that is length times long with the first element of num and each element
after num multiplied by 3
*/

function initiateSequence(num, length) {
    let seq = [num];

    for (i = 0; seq.length < length; i++) {
        seq.push(seq[seq.length - 1] * 3);
    }

    return seq;
}

console.log(initiateSequence(1, 2));
console.log(initiateSequence(2, 1));
console.log(initiateSequence(4, 5));
console.log(initiateSequence(8, 10));
console.log(initiateSequence(20, 5));
console.log("/////////////////////////////////////////");




















/*
adjacent sum
write a function that takes in an array of numbers. It should return a new array
where every element is the sum of the previous 2 elements of the array
*/

function adj_sum(array) {
    let sum_arr = [];

    for (i = 0; i < array.length; i++) {
        if (i + 1 < array.length) {
            sum_arr.push(array[i] + array[i + 1]);
        }
    }

    return sum_arr;
}

console.log(adj_sum([1, 2, 3]));
console.log(adj_sum([2, 4, 6, 8]));
console.log(adj_sum([5, 10, 15, 20, 25]));
console.log("/////////////////////////////////////////");



/*
pyramid sum
write a funtion that takes in a base array of numbers. It should return a 2D
array where every new array is the adjacent sum of the previous array starting
with the base. The adjacent sum is the sum of the previous 2 elements of an 
array. Example: [1,2,3,4] will be [3,5,7] because 1+2=3, 2+3=5, 3+4=7.
*/

function pyramidSum(array) {
    let pyramid = [array];

    for (i = 0; pyramid.length < array.length; i++) {
        let prev_level = pyramid[0];
        let next_level = adjSum(prev_level);
        pyramid.unshift(next_level);
    }

    return pyramid;
}

function adjSum(arr) {
    let sum_arr = [];

    for (i = 0; i < arr.length; i++) {
        if (i + 1 < arr.length) {
            sum_arr.push(arr[i] + arr[i + 1]);
        }
    }

    return sum_arr;
}

console.log(pyramidSum([1, 2, 3, 4, 5]));
console.log(pyramidSum([2, 4, 6, 8, 10]));
console.log(pyramidSum([5, 10, 15, 20, 40, 60]));
console.log(pyramidSum([20, 40, 60, 80, 100, 120, 140, 160]));
console.log("/////////////////////////////////////////");


















/*
Is Prime
write a function that takes in a number and determines if that number is prime. 
a prime number is a number that is only divisible by 1 and itself. The function
should return true if the number is prime or false otherwise.
*/

function isPrime(num) {

    for (i = 2; i < num; i++) {
        if (num % i == 0) {
            return false + ", this number is not Prime.";
        }
    }

    return true + ", this number is Prime.";
}

console.log(isPrime(8));
console.log(isPrime(13));
console.log(isPrime(19));
console.log(isPrime(20));
console.log("/////////////////////////////////////////");






















/*
prime factor
write a function that takes in a num. The function should return an array of 
all of the numbers that are factors, but only if the factors are also prime.
prime numbers are numbers that are only divisible by 1 and their self.
*/

function primeFactors(num) {
    let primeFactorsArr = [];

    for (i = 1; i <= num; i++) {
        if (num % i == 0 && is_prime(i)); {
            primeFactorsArr.push(i);
        }
    }

    return primeFactorsArr;
}

function is_prime(num) {
    for (j = 2; j < num; j++) {
        if (num % j == 0) {
            return false;
        }
    }

    return true;
}

console.log(primeFactors(24));
console.log(primeFactors(60));
console.log("/////////////////////////////////////////");








/*
Have the function LetterChanges(str) take the str parameter being passed 
and modify it using the following algorithm. Replace every letter in the 
string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.
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














/*
Have the function SimpleSymbols(str) take the str parameter being passed 
and determine if it is an acceptable sequence by either returning the string 
true or false. The str parameter will be composed of + and = symbols with several 
characters between them (ie. ++d+===+c++==a) and for the string to be true each 
letter must be surrounded by a + symbol. So the string to the left would be false. 
The string will not be empty and will have at least one letter.
*/

function SimpleSymbols(str) {
    let alpha = "abcdefghijklmnopqrstuvwxyz";

    for (i = 0; i < str.length; i++) {
        if (alpha.includes(str[i]) && str[i - 1] == "+" && str[i + 1] == "+") {
            return true;
        }
    }
    return false;
}


console.log(SimpleSymbols("+d+=3=+s+"));
console.log(SimpleSymbols("f++d+"));
console.log("/////////////////////////////////////////");




















/*
time convert
write a funtion that takes in a num and return the amount of hours and amount of 
minutes of num. if the number is 124, the function should return 2:04 with a ":"
seperating the two numbers.
*/

function timeConvert(num) {


}
console.log(timeConvert(124));
console.log(timeConvert(45));
console.log(timeConvert(456));
console.log(timeConvert(800));
console.log("/////////////////////////////////////////");











/*
Have the function AlphabetSoup(str) take the str string parameter being passed 
and return the string with the letters in alphabetical order (ie. hello becomes ehllo). 
Assume numbers and punctuation symbols will not be included in the string.
*/

function AlphabetSoup(str) {

    return str.split("").sort().join("");

}

console.log(AlphabetSoup("Hello"));
console.log(AlphabetSoup("JavaScript"));
console.log("/////////////////////////////////////////");