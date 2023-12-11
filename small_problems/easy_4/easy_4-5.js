function runningTotal(numArray) {
  let accumulator = 0;
  let resultArray = [];
  for (let index = 0; index < numArray.length; index++) {
    accumulator += numArray[index];
    resultArray.push(accumulator);
  }
  console.log(resultArray);
  return resultArray;
}

runningTotal([2, 5, 13]); // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]); // [14, 25, 32, 47, 67]
runningTotal([3]); // [3]
runningTotal([]); // []
