/*
pyramid sum
write a funtion that takes in a base array of numbers. It should return a 2D
array where every new array is the adjacent sum of the previous array starting
with the base. The adjacent sum is the sum of the previous 2 elements of an 
array. Example: [1,2,3,4] will be [3,5,7] because 1+2=3, 2+3=5, 3+4=7.
*/

function pyramidSum(array) {
    let pyramid = [array];

    for (i = 0; pyramid.length < array.length; i++) {
        let prev_level = pyramid[0];
        let next_level = adjSum(prev_level);
        pyramid.unshift(next_level);
    }

    return pyramid;
}

function adjSum(arr) {
    let sum_arr = [];

    for (i = 0; i < arr.length; i++) {
        if (i + 1 < arr.length) {
            sum_arr.push(arr[i] + arr[i + 1]);
        }
    }

    return sum_arr;
}

console.log(pyramidSum([1, 2, 3, 4, 5]));
console.log(pyramidSum([2, 4, 6, 8, 10]));
console.log(pyramidSum([5, 10, 15, 20, 40, 60]));
console.log(pyramidSum([20, 40, 60, 80, 100, 120, 140, 160]));
console.log("/////////////////////////////////////////");