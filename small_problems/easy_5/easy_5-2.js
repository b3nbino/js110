function union(arr1, arr2) {
  let finalArr = [];

  for (let index = 0; index < arr1.length; index++) {
    const element = arr1[index];

    if (finalArr.includes(element)) {
      continue;
    }

    finalArr.push(element);
  }

  for (let index = 0; index < arr2.length; index++) {
    const element = arr2[index];

    if (finalArr.includes(element)) {
      continue;
    }

    finalArr.push(element);
  }

  console.log(finalArr);
  return finalArr;
}

union([1, 3, 5], [3, 6, 9]); // [1, 3, 5, 6, 9]
