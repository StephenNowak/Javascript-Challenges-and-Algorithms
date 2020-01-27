function sameStructureAs(arr1, arr2) {
    let arr1Compare = []; 
    let arr2Compare = []; 
 
    
    if (arr1.length != arr2.length){
        return false 
    }
    
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[i].length; j++) {

        }
    }



    return arr1Compare + " " + arr2Compare;
    // return arr1Compare == arr2Compare;
};

console.log(sameStructureAs([ 1, 1, 1 ], [ 2, 2, 2 ] ));
console.log(sameStructureAs([ 1, [ 1, 1 ] ], [ 2, [ 2, 2 ] ]));
console.log(sameStructureAs([ 1, [ 1, 1 ] ], [ [ 2, 2 ], 2 ]));
console.log(sameStructureAs([ 1, [ 1, 1 ] ], [ [ 2 ], 2 ]));
console.log(sameStructureAs([ [ [ ], [ ] ] ], [ [ [ ], [ ] ] ]));
console.log(sameStructureAs([ [ [ ], [ ] ] ], [ [ 1, 1 ] ]));
