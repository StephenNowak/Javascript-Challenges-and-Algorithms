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