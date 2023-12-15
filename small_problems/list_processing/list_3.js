function multiplyAllPairs(arr1, arr2) {
  let finalArr = [];
  for (let index = 0; index < arr1.length; index++) {
    for (let i = 0; i < arr2.length; i++) {
      finalArr.push(arr1[index] * arr2[i]);
    }
  }

  console.log(finalArr.sort((a, b) => a - b));
  return finalArr.sort((a, b) => a - b);
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]); // [2, 4, 4, 6, 8, 8, 12, 16]
