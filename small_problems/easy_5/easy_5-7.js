function multiplyList(array1, array2) {
  let finalArray = [];

  for (let index = 0; index < array1.length; index++) {
    finalArray.push(array1[index] * array2[index]);
  }
  console.log(finalArray);
  return finalArray;
}

multiplyList([3, 5, 7], [9, 10, 11]); // [27, 50, 77]
