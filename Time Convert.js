/*
time convert
write a funtion that takes in a num and return the amount of hours and amount of 
minutes of num. if the number is 124, the function should return 2:04 with a ":"
seperating the two numbers.
*/

function timeConvert(num) {
    let hourCount = Math.floor(num / 60);
    let minuteCount = (num % (60 * hourCount));
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    if (hourCount == 0) {
        minuteCount = num;
    }

    if (minuteCount == 0) {
        minuteCount = "0" + minuteCount;
    }

    if (numbers.includes(minuteCount)) {
        minuteCount = "0" + minuteCount;
    }

    let time = hourCount + ":" + minuteCount;
    return time;
}

console.log(timeConvert(120));
console.log(timeConvert(124));
console.log(timeConvert(45));
console.log(timeConvert(456));
console.log(timeConvert(800));
console.log("/////////////////////////////////////////");