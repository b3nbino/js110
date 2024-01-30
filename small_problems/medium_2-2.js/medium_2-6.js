//Algorithm:
// Claculate Square of Sum
// Create sum variable
// Using for loop add square of all indicies <= num to sum
// Calculate Sum of suares
// Within same for loop and another sum variable, add up all indicies <= num
// After for loop square sum2
// return sum1 - sum2 absolute value

function sumSquareDifference(num) {
  let sumOfSquares = 0;
  let squareSum = 0;

  for (let i = 0; i <= num; i++) {
    sumOfSquares += i * i;
    squareSum += i;
  }

  squareSum *= squareSum;

  return Math.abs(sumOfSquares - squareSum);
}

console.log(sumSquareDifference(3));
console.log(sumSquareDifference(10));
console.log(sumSquareDifference(1));
console.log(sumSquareDifference(100));
// 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
// 2640
// 0
// 25164150
