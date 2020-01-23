/*
initiate sequence
Write a function that takes in a length and a num and returns an array
that is length times long with the first element of num and each element
after num multiplied by 3
*/

function initiateSequence(num, length) {
    let seq = [num];

    for (i = 0; seq.length < length; i++) {
        seq.push(seq[seq.length - 1] * 3);
    }

    return seq;
}

console.log(initiateSequence(1, 2));
console.log(initiateSequence(2, 1));
console.log(initiateSequence(4, 5));
console.log(initiateSequence(8, 10));
console.log(initiateSequence(20, 5));
console.log("/////////////////////////////////////////");