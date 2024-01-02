function merge(array1, array2) {
  let copy1 = array1.slice().sort((a, b) => a - b);
  let copy2 = array2.slice().sort((a, b) => a - b);
  let finalArray = [];

  while (copy1.length > 0 || copy2.length > 0) {
    if (copy1[0] <= copy2[0]) {
      finalArray.push(copy1.shift());
    } else if (copy2[0] <= copy1[0]) {
      finalArray.push(copy2.shift());
    } else {
      finalArray.push(copy1[copy1.length - 1] ? copy1.shift() : copy2.shift());
    }
  }

  console.log(finalArray);
  return finalArray;
}

merge([1, 5, 9], [2, 6, 8]); // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]); // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]); // [1, 4, 5]
merge([1, 4, 5], []); // [1, 4, 5]
