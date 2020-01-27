/*
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has 
the format of a valid US number. The following are examples of valid formats 
for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

For this challenge you will be presented with a string such as 800-692-7753 
or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number 
based on any combination of the formats provided above. The area code is required. 
If the country code is provided, you must confirm that the country code is 1. Return 
true if the string is a valid US phone number; otherwise return false.
*/

function telephoneCheck(str) {
    let newStrArr = str.split(" ").join("");
    let counter = 0;
    let numberBank = "1234567890";
    let numberBankArr = []; 
    let charBank = "()-";
    let charBankArr = [];
 
    
    for (let i = 0; i < newStrArr.length; i++) {
        if (!numberBank.includes(newStrArr[i]) && !charBank.includes(newStrArr[i])) {
            return false;
        } else if (charBank.includes(newStrArr[i])) {
            charBankArr.push(newStrArr[i])
        } else if (numberBank.includes(newStrArr[i])){
            numberBankArr.push(newStrArr[i]);
        } 
    }

    if (numberBankArr.length !== 10 && numberBankArr.length !== 11) {
        return false;
    }  else if (numberBankArr.length == 11 && numberBankArr[0] != 1) {
        return false;
    }  else if (newStrArr[0] == charBank[2]) {
        return false;
    }

    if (newStrArr[0] === charBank[0] && newStrArr[4] !== (charBank[1])) {
        return false;
    }  else if (newStrArr[1] === charBank[0] && newStrArr[5] !== (charBank[1])) {
        return false;
    }  else if (newStrArr[4] === charBank[1] && newStrArr[0] !== charBank[0]) {
        return false;
    }  else if (newStrArr[5] === charBank[1] && newStrArr[1] !== charBank[0]) {
        return false;
    }  else if (newStrArr[3] === charBank[1]) {
        return false;
    }

    return true;
}

// function telephoneCheck(str) {
//     var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
//     return regex.test(str);
//   }
//   telephoneCheck("555-555-5555");
 
console.log(telephoneCheck("555-555-5555")); //should return true.
console.log(telephoneCheck("1 555-555-5555")); //should return true.
console.log(telephoneCheck("1 (555) 555-5555")); //should return true.
console.log(telephoneCheck("5555555555")); //should return true.
console.log(telephoneCheck("555-555-5555")); //should return true.
console.log(telephoneCheck("(555)555-5555")); //should return true.
console.log(telephoneCheck("1(555)555-5555")); //should return true.
console.log(telephoneCheck("1 555 555 5555")); //should return true.
console.log(telephoneCheck("1 456 789 4444")); //should return true.
console.log(telephoneCheck("123**&!!asdf#")); //should return false.
console.log(telephoneCheck("55555555")); //should return false.
console.log(telephoneCheck("(6054756961)")); //should return false.
console.log(telephoneCheck("2 (757) 622-7382")); //should return false.
console.log(telephoneCheck("0 (757) 622-7382")); //should return false.
console.log(telephoneCheck("-1 (757) 622-7382")); //should return false. 
console.log(telephoneCheck("2 757 622-7382")); //should return false.
console.log(telephoneCheck("10 (757) 622-7382")); //should return false.
console.log(telephoneCheck("27576227382")); //should return false.
console.log(telephoneCheck("(275)76227382")); //should return false.
console.log(telephoneCheck("2(757)6227382")); //should return false.
console.log(telephoneCheck("2(757)622-7382")); //should return false.
console.log(telephoneCheck("555)-555-5555")); //should return false. == 
console.log(telephoneCheck("(555-555-5555")); //should return false.
console.log(telephoneCheck("(555)5(55?)-5555")); //should return false.
console.log(telephoneCheck("555-5555")); //should return false.
console.log(telephoneCheck("5555555")); //should return false.
console.log(telephoneCheck("1 555)555-5555")); //should return false.  
console.log(telephoneCheck("1 (555 555-5555")); //should return false.