/*
Have the function QuestionsMarks(str) take the str string parameter, which will contain 
single digit numbers, letters, and question marks, and check if there are exactly 3 question 
marks between every pair of two numbers that add up to 10. If so, then your program should 
return the string true, otherwise it should return the string false. If there aren't any 
two numbers that add up to 10 in the string, then your program should return false as well.

For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because 
there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at 
the end of the string.

Sample Test Cases:
Input:"aa6?9"
Output:false
Input:"acc?7??sss?3rr1??????5"
Output:true
*/

function QuestionsMarks(str) {
    function QuestionsMarks(str) {
        let numbDict = 1234567890;
        let num1 = 0;
        let num2 = 0;
        let num1Idx = 0;
        let num2Idx = 0;

        for (i = 0; i < str.length; i++) {
            if (numbDict.includes(str[i])) {
                num1 = str[i];
                num1Idx = i;
            }
        }

        for (j = num1Idx + 1; j < str.length; j++) {
            if (numbDict.includes(str[j])) {
                num2 = str[j];
                num2Idx = j;
            }
        }

        let targetStr = str.slice(num1Idx, num2Idx);
        let counter = 0;

        for (k = 0; k < targetStr.length; k++) {
            if (targetStr[k] == "?") {
                counter += 1;
            }
        }

        if (counter == 3) {
            return true;
        }

        return false;

    }

}
console.log(QuestionsMarks("aa6?9"));
console.log(QuestionsMarks("acc?7??sss?3rr1??????5"));
console.log(QuestionsMarks("aad4??fdg?7"));
console.log(QuestionsMarks("jgk9??????7dda9?asd3"));

















//     let count = 0;
//     let numbers = "1234567890";

//     for (i = 0; i < str.length; i++) {
//         if (numbers.includes(str[i])) {
//             for (j = i + 1; j < str.length; j++) {
//                 if (numbers.includes(str[j])) {
//                     let testSection = str.slice(i, j);
//                     for (k = 0; k < testSection.length; k++) {
//                         if (testSection[k] == "?") {
//                         count += 1;
//                         if (count == 3) {
//                             return true;
//                         }
//                     }
//                 }
//                 }
//             }
//         }
//     }
//     return false;
// }