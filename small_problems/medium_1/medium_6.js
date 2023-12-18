function findFibonacciIndexByLength(goalLength) {
  let iterations = 1n;
  let num1 = 0n;
  let num2 = 1n;
  let num3;

  do {
    iterations++;
    num3 = num1 + num2;
    num1 = num2;
    num2 = num3;
  } while (num3.toString().length < goalLength);

  return iterations;
}

console.log(findFibonacciIndexByLength(2n) === 7n); // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n); // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.
