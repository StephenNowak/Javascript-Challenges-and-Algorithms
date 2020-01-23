/*
Write a function all_else_equal that takes in an array of numbers. The method 
should return the element of the array that is equal to half of the sum of all 
elements of the array. If there is no such element, the function should return null.
*/

function allElseEqual(arr) {
    let count = 0;

    for (i = 0; i < arr.length; i++) {
        count += arr[i];
    }

    for (j = 0; j < arr.length; j++) {
        if (arr[j] == count / 2) {
            return arr[j];
        }
    }

    return null;
}

console.log(allElseEqual([2, 4, 3, 10, 1]));
console.log(allElseEqual([6, 3, 5, -9, 1]));
console.log(allElseEqual([1, 2, 3, 4]));