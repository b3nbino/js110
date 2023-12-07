function doubleOddIndex(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      newArray.push(array[i]);
    } else {
      newArray.push(array[i] * 2);
    }
  }

  return newArray;
}

console.log(doubleOddIndex([1, 2, 3, 4, 5]));
