function integerToString(num) {
  let digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let digit;
  let string = "";

  do {
    digit = num % 10;
    string = digits[digit] + string;

    num = Math.floor(num / 10);
  } while (num > 0);

  return string;
}

function signedIntegerToString(value) {
  if (value === 0) {
    return integerToString(value);
  } else if (value > 0) {
    return "+" + integerToString(value);
  } else {
    return "-" + integerToString(Math.abs(value));
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
