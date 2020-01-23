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