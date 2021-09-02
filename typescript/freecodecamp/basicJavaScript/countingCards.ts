let count = 0;
function cc(card: any) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;

    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

  let holdBet = "Hold";

  if (count > 0) {
    holdBet = "Bet";
  }

  return count + " " + holdBet;
}

// Change this Value to test
cc(4);
cc(5);
cc("K");
cc("7");
cc("A");
console.log(cc(1));
