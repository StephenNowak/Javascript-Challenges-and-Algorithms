/*
is valid email
Write a funtion that takes in an email str and determines if it is a valid email.
An email is considered valid if it meets the following criteria:
1. It contains exactly 1 @ symbol
2. It contains only alphanumeric characters or _ before the @ symbol
3. It contains exactly 1 . symbol
4. it contains only "net" or "com" after the .
*/

function isValidEmail(str) {
    let alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_1234567890";
    let parts = str.split("@");
    let part1 = parts[0];
    let part2 = parts[1];
    let dotParts = part2.split(".");
    let dotPart1 = dotParts[0];
    let dotPart2 = dotParts[1];
  
    if (parts.length != 2) {
      return false;
    }
  
    for (let i = 0; i < part1.length; i++) {
      if (!alpha.includes(part1[i])) {
        return false;
      }
    }
   
    if (dotParts.length != 2) {
      return false;
    }
  
    if (!dotPart2.includes("com") && !dotPart2.includes("net")) {
      return false;
    }
  
    return true;
  }
  
  console.log("/////////////////////////////////////////");
  console.log(isValidEmail("stephennowak@yahoo.com"));
  console.log(isValidEmail("peachez420blaze@420.net"));
  console.log(isValidEmail("Carl_da_be5t@gmail.c.om"));
  console.log(isValidEmail("cr@ig_Ferguson@gmail.com"));
  console.log(isValidEmail("Kenneth_Jones@facebook.io"));
  console.log("/////////////////////////////////////////");

/*
is valid email
Write a funtion that takes in an email str and determines if it is a valid email.
An email is consider valid if it meets the following criteria:
1. It contains exactly 1 @ symbol
2. It contains only alphanumeric characters or _ before the @ symbol
3. It contains exactly 1 . symbol
4. it contains only "net" or "com" after the .
*/

// function isValidEmail(str) {
//     let parts = str.split("@");
//     if (parts.length > 2) {
//         return false;
//     }

//     let alphabet = ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_");
//     let part1 = parts[0];
//     let part2 = parts[1];

//     for (i = 0; i < part1.length; i++) {
//         if (!alphabet.includes(part1[i])) {
//             return false;
//         }
//     }

//     let theDot = part2.split(".");
//     if (theDot.length != 2) {
//         return false;
//     }


//     return true;
// }

// console.log(isValidEmail("stephennowak@yahoo.com"));
// console.log(isValidEmail("peachez420blaze@420.net"));
// console.log(isValidEmail("Carl_da_be5t@gmail.c.om"));
// console.log(isValidEmail("cr@ig_Ferguson@gmail.com"));
// console.log(isValidEmail("KennethJones*&#!@facebook.com"));
// console.log("/////////////////////////////////////////");


