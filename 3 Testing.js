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