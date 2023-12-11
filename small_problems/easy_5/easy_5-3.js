function halvsies(arr) {
  let finalArr = [[], []];

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];

    if (index < arr.length / 2) {
      finalArr[0].push(element);
    } else {
      finalArr[1].push(element);
    }
  }

  console.log(...finalArr);
  return finalArr;
}

halvsies([1, 2, 3, 4]); // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]); // [[1, 5, 2], [4, 3]]
halvsies([5]); // [[5], []]
halvsies([]); // [[], []]
