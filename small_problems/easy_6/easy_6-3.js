function reverseNumber(num) {
  num = num.toString().split("").reverse().join("");

  while (num[0] === "0") {
    num = num.slice(1);
  }

  console.log(num);
  return num;
}

reverseNumber(12345); // 54321
reverseNumber(12213); // 31221
reverseNumber(456); // 654
reverseNumber(12000); // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1); // 1
