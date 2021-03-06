/*
You will write a card counting function. It will receive a card parameter, 
which can be a number or a string, and increment or decrement the global count 
variable according to the card's value (see table). The function will then return 
a string with the current count and the string Bet if the count is positive, or 
Hold if the count is zero or negative. The current count and the player's decision 
(Bet or Hold) should be separated by a single space.

Count Change	             Cards
+1	                         2, 3, 4, 5, 6
0	                         7, 8, 9
-1	                         10, 'J', 'Q', 'K', 'A'

Example Output
-3 Hold
5 Bet
*/

var count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1;
      break;
    case 7:
    case 8:
    case 9:
      count += 0;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count -= 1;
      break;
  }

  if (count > 0) {
    return count + " Bet";
  }
  if (count <= 0) {
    return count + " Hold";
  }
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
console.log(cc(2));
console.log(cc(3));
console.log(cc(7));
console.log(cc("K"));
console.log(cc("A"));