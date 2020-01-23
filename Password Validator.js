/*
Write a program that validates passwords to match a specific set of rules.
A valid password is one that conforms to the following set of rules: 
1.Minimum length is 5
2.Maximum length is 10
3.should contain at least 1 number
4.should contain at least one special character(!@#$%^&*)
5.should not contain spaces
*/

function passwordValidator(password) {
    let numberCount = 0;
    let specCharCount = 0;
    let alphabet = "abcdefghijklmnopqrstuvwxyz!@#$%^&*1234567890";
    let specChars = "!@#$%^&*";
    let numbers = "1234567890";
    let passwordArr = password.toLowerCase().split("");

    for (let i = 0; i < passwordArr.length; i++) {
        if (!alphabet.includes(passwordArr[i])) {
            return false;
        }

        if ( passwordArr.length < 5 || passwordArr.length > 10) {
            return false;
        }

        if (numbers.includes(passwordArr[i])) {
            numberCount += 1;
        }

        if (specChars.includes(passwordArr[i])) {
            specCharCount += 1;
        }
    }

    if (numberCount < 1 || specCharCount < 1) {
        return false;
    }

    return true;
}

console.log(passwordValidator("KRN23!#r"));
console.log(passwordValidator("KWPufgg"));
console.log(passwordValidator("uuGG!e"));
console.log(passwordValidator("wpf3f"));
console.log(passwordValidator("kdGP44#@5gyNME"));
console.log(passwordValidator("K3@o"));
console.log(passwordValidator("KG 2!olp%1"));
console.log(passwordValidator("4Pl3@bW7"));