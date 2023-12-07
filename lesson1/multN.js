function multNth(array, multiplier) {
  let newArray = [];

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    newArray.push(element * multiplier);
  }

  return newArray;
}

console.log(multNth([1, 2, 3, 4], 3));
console.log(multNth([7, 7, 7, 7], 21));
