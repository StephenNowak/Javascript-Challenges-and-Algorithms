/*
The fibonacci sequence is a sequence of numbers whose first and 
second elements are 1. To generate further elements of the sequence 
we take the sum of the previous two elements. For example the first 6 
fibonacci numbers are 1, 1, 2, 3, 5, 8. Write a function fibonacci that 
takes in a number length and returns the fibonacci sequence up to the 
given length.
*/

function fibonacci(length) {
    if (length == 0) {
        return [0];
    }
    if (length == 1) {
        return [1];
    }

    let fibo = [1, 1];

    while (fibo.length < length) {
        fibo.push(fibo[fibo.length - 1] + fibo[fibo.length -2]);
    }

    return fibo;
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(6));
console.log(fibonacci(8));