/*
Write a function adjacent_sum that takes in an array of 
numbers and returns a new array containing the sums of adjacent 
numbers in the original array. See the examples.
*/

function adjacentSum(arr) {
    let adjSUmArr = [];

    for (i = 0; i < arr.length; i++) {
        if (i + 1 < arr.length) {
            adjSUmArr.push(arr[i] + arr[i + 1]);
        }
    }

    return adjSUmArr;
}

console.log(adjacentSum([3, 7, 2, 11]));
console.log(adjacentSum([2, 5, 1, 9, 2, 4]));