function integerToString(num) {
  let digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let digit;
  let string = "";

  do {
    digit = num % 10;
    string = digits[digit] + string;

    num = Math.floor(num / 10);
  } while (num > 0);

  console.log(string);
  return string;
}

integerToString(4321); // "4321"
integerToString(0); // "0"
integerToString(5000); // "5000"
integerToString(1234567890); // "1234567890"
