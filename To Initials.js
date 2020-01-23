/*
Write a function toInitials that takes in a person's name string 
and returns a string representing their initials.
*/


function toInitials(name) {
    let initials = [];
    let names = name.split(" ");

    for (i = 0; i < names.length; i++) {
        initials.push(names[i][0]);
    }

    return initials.join("");
}

console.log(toInitials("Kelvin Bridges"));
console.log(toInitials("Michaela Yamamoto"));
console.log(toInitials("Mary La Grange"));
console.log("/////////////////////////////////////////");