function sequentialSizes(num: number) {
  let answer = "";
  switch (num) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;

    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;

    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
  return answer;
}

// Change this Value to test
console.log(sequentialSizes(1));
