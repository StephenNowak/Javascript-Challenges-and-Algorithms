/*
The fibonacci sequence is a set of numbers that starts with a one or a zero,
followed by a one, and proceeds based on the rule that each number is equal
to the sum of the previous two numbers.
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55....

We can generalize this to an N-bonacci sequence, where the sum of the 
previous N numbers for the next term.

For example: a 3-bonacci sequence is the following:
0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81...

Write a program that takes two inputs, N and M, and gets the M-th term
of any N-bonacci sequence.

For example: 
input: (N, M) = 4, 13)
output: 0, 0, 0, 1, 1, 2, 4, 8, 15, 29, 56, 108, 208...

BONUS POINTS: try to solve this recursively and iteratively
*/

function nBinocci(n, length) {
    if (length == 0) {
        return [0];
    }
    if (length == 1) {
        return [1];
    }

    let fibo = [0, 0, 1, 1];
    for (let i = 0; i <= length; i++) {
        fibo.push(fibo[fibo.length - n]);
    }

    return fibo;
}

console.log(nBinocci(4, 13));
console.log(nBinocci(3, 12));
console.log(nBinocci(2, 1));
console.log(nBinocci(2, 0));