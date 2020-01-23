/*
Write a function that recieves an array of integers and returns
the minimal sum of the array. (sum of products of each two adjacent numbers)

For example: 
Without sorting the array: [40, 25, 10, 5, 1] the sum is:
(40*25) + (25*10) + (10*5) + (5*1) = 1305

The true expected output of the above array should be == 225.

The challenge is the find the best possible sort of the array of element,
to have the minial sum result
*/

function minimalPairs(array) {
    minimalSum = 0;

    for (let i = 0; i < array.length; i++) {
        
    }
}


console.log(minimalPairs([40, 25, 10, 1]));
console.log(minimalPairs([10, 8, 6, 4, 2]));