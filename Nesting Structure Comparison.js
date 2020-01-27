/*
Complete the function/method (depending on the language) to return true/True when its 
argument is an array that has the same nesting structure as the first array.

For example:

 // should return true
[ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );          
[ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );  

 // should return false 
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );  
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );  

// should return true
[ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ); 

// should return false
[ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );
*/
var cubes = [
    [1, 2, 3],
    [4, 5, 6],    
    [7, 8, 9],
   ];
   
   for(var i = 0; i < cubes.length; i++) {
       var cube = cubes[i];
       for(var j = 0; j < cube.length; j++) {
           display("cube[" + i + "][" + j + "] = " + cube[j]);
       }
   }

function sameStructureAs(arr1, arr2) {
    let arr1Compare = []; 
    let subArr1Compare = []; 
    let arr2Compare = []; 
    let subArr2Compare = []; 

    let arr1Obj = {}; 
    let arr2Obj = {}; 
    

    if (arr1.length != arr2.length){
        return false 
    }
    
    arr1Compare.push(arr1.length);
    arr2Compare.push(arr2.length);

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[i].length; j++) {
           for (let k = 0)
        }
    }


    return subArr1Compare;
    // return arr1Compare + " " + arr2Compare;
    // return arr1Compare == arr2Compare;
};

// flat() ==> arr1 = [1 [1, 1]] // [[1, 1], [1]] ==> arr1.flat() ==> [1, 1, 1]
//TODO
//determine number of nested arrays inside of array 
//iterate through each nested array and compare lengths
[]
[ undefined, 2 ]
[ undefined, 2 ]
[ undefined, 2 ]
console.log(sameStructureAs([ 1, 1, 1 ], [ 2, 2, 2 ] ));
console.log(sameStructureAs([ 1, [ 1, 1 ] ], [ 2, [ 2, 2 ] ]));
console.log(sameStructureAs([ 1, [ 1, 1 ] ], [ [ 2, 2 ], 2 ]));
console.log(sameStructureAs([ 1, [ 1, 1 ] ], [ [ 2 ], 2 ]));
console.log(sameStructureAs([ [ [ ], [ ] ] ], [ [ [ ], [ ] ] ]));
console.log(sameStructureAs([ [ [ ], [ ] ] ], [ [ 1, 1 ] ]));

/*

manipulate the array into a hash table 

hash table contains key index pair values and bit-value of the character

e.g. --> arr1 == [[[]]]
arr1[0] = [
arr1[1] = [
arr1[2] = [
arr1[3] = ]
arr1[4] = ]
arr1[5] = ]

[ = {0, 1, 2}
] = {3, 4, 5}

e.g. --> arr1 = [[1], [1], [1]] // [[2], [2], [2]]

[ = {0, 3, 6}
] = {2, 5, 8}   

key => value
*/



























// Array.prototype.sameStructureAs = function (other) {
//     let arr1 = Array.prototype; 
//     let arr2 = other 

//     // if (arr1.length !== arr2.length){
//     //     return false 
//     // }

//     console.log(arr1)
//     console.log(arr2)
// };
    
// console.log([ 1, 1, 1 ].sameStructureAs([ 2, 2, 2 ]));
// console.log([ 1, [ 1, 1 ] ].sameStructureAs([ 2, [ 2, 2 ] ]));
// console.log([ 1, [ 1, 1 ] ].sameStructureAs([ [ 2, 2 ], 2 ]));
// console.log([ 1, [ 1, 1 ] ].sameStructureAs([ [ 2 ], 2 ]));
// console.log([ [ [ ], [ ] ] ].sameStructureAs([ [ [ ], [ ] ] ]));
// console.log([ [ [ ], [ ] ] ].sameStructureAs([ [ 1, 1 ] ]));

