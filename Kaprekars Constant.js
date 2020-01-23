/*
Have the function KaprekarsConstant(num) take the num parameter being passed which 
will be a 4-digit number with at least two distinct digits. Your program should perform 
the following routine on the number: Arrange the digits in descending order and in ascending 
order (adding zeroes to fit it to a 4-digit number), and subtract the smaller number from 
the bigger number. Then repeat the previous step. Performing this routine will always cause 
you to reach a fixed number: 6174. Then performing the routine on 6174 will always give you 
6174 (7641 - 1467 = 6174). Your program should return the number of times this routine must 
be performed until 6174 is reached. For example: if num is 3524 your program should return 3 
because of the following steps: 
(1) 5432 - 2345 = 3087, (2) 8730 - 0378 = 8352, (3) 8532 - 2358 = 6174.
*/

function KaprekarsConstant(num) {
    const KapCon = 6174;
    let count = 0;

    while (true) {
        count += 1;
        num = KapConReducer(num);
        if (num == KapCon) {
            return count;
        }
    }
}



function KapConReducer(num) {
    if (num.toString().length < 4) {
        num = num.toString().slice(0) + 0;
    }

    num = parseInt(num);
    let num_arr = Array.from(num.toString()).map(Number);
    let asce_arr = num_arr.sort();
    let desc_arr = asce_arr.slice(0).reverse();
    let asce_num = parseInt(asce_arr.join(""));
    let desc_num = parseInt(desc_arr.join(""));

    return desc_num - asce_num;
}

console.log(KaprekarsConstant(6174)); // => 1
console.log(KaprekarsConstant(2111)); // => 5
console.log(KaprekarsConstant(9831)); // => 7