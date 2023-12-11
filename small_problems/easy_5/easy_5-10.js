function average(array) {
  let numAverage = Math.floor(
    array.reduce((acc, curr) => acc + curr) / array.length
  );
  console.log(numAverage);
  return numAverage;
}

average([1, 5, 87, 45, 8, 8]); // 25
average([9, 47, 23, 95, 16, 52]); // 40
