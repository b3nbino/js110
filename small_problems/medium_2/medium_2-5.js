function featured(num) {
  if (num >= 9876543201) {
    console.log(
      "There is no possible number that fulfills those requirements."
    );
    return;
  }

  let featuredNumber = 0;

  function repeatedNum() {
    let featuredString = featuredNumber.toString();
    let counter = {};

    for (let index = 0; index < featuredString.length; index++) {
      counter[featuredString[index]] = 0;
    }
    for (let index = 0; index < featuredString.length; index++) {
      counter[featuredString[index]] += 1;
    }

    console.log();
    return Math.max(...Object.values(counter)) > 1;
  }

  while (featuredNumber <= num || featuredNumber % 2 === 0 || repeatedNum()) {
    featuredNumber += 7;
  }

  console.log(featuredNumber);
  return featuredNumber;
}

featured(12); // 21
featured(20); // 21
featured(21); // 35
featured(997); // 1029
featured(1029); // 1043
featured(999999); // 1023547
featured(999999987); // 1023456987
featured(9876543186); // 9876543201
featured(9876543200); // 9876543201
featured(9876543201); // "There is no possible number that fulfills those requirements."
