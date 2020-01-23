/*
Write a function that takes in a number length as its argument.
The function should return the fibonacci number that appears at 
that length. i.e. 6 will return 8 because 8 is the 6th fibo number.
*/

function fibonacciSequence(length) {
    if (length == 0) {
        return 0;
    }
    if (length == 1) {
        return 1;
    }

    let fibo = [1,1];

    for (let i = 0; i < length; i++) {
        if (i - 1 >= 0) {
          fibo.push(fibo[i] + fibo[i - 1]);
        }
    }

    return fibo[fibo.length-2];
}

console.log(fibonacciSequence(6));
console.log(fibonacciSequence(15));
console.log(fibonacciSequence(30));