function multiplicativeAverage(array) {
  let product = array.reduce((acc, curr) => acc * curr);
  let average = (product / array.length).toFixed(3);
  console.log(average);
  return average;
}

multiplicativeAverage([3, 5]); // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]); // "28361.667"
