/*
Write a function FirstFactorial that takes in a number and
returns the factored output of that num.
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