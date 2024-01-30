//Algorithm:
//Use a for loop to iterate through fibb numbers until we find the one with the specified length
//Use a variable to store the amount of iterations
//Use two variables to store the current number and the next number
//First number should be the current number
//Second should be the current number + the previous number
//Save second to first and repeat
//Through each iteration test digit length, if it is the specified length end the loop
//Return the amount of iterations

function findFibonacciIndexByLength(numOfDigits) {
  let iterations = 1n;
  let currentNumOfDigits = 1n;
  let num1 = 0n;
  let num2 = 1n;
  let fibNum = 0n;

  while (currentNumOfDigits !== numOfDigits) {
    fibNum = num1 + num2;
    num1 = num2;
    num2 = fibNum;
    iterations += 1n;
    currentNumOfDigits = BigInt(fibNum.toString().length);
  }

  console.log(iterations);
  return iterations;
}

findFibonacciIndexByLength(2n) === 7n; // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n; // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;

// The last example may take a minute or so to run.
