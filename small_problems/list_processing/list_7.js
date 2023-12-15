function numSubstrings(num) {
  let subStringArray = [];

  num.forEach((element, index) => {
    subStringArray.push((subStringArray[index - 1] ?? "") + element);
  });

  return subStringArray;
}

function sumOfSums(numArray) {
  numSubArray = numSubstrings(numArray);
  numSubArray.forEach((number, index) => {
    if (number.length > 1) {
      numSubArray[index] = number.split("");
    }
  });

  numSubArray = numSubArray.flat(Infinity);
  console.log(numSubArray.reduce((acc, curr) => Number(acc) + Number(curr)));
  return numSubArray.reduce((acc, curr) => Number(acc) + Number(curr));
}

sumOfSums([3, 5, 2]); // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]); // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]); // 4
sumOfSums([1, 2, 3, 4, 5]); // 35
