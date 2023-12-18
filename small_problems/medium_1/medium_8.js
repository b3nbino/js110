function fibonacci(iterations) {
  let fibonacciNum = 0n;
  let num1 = 0n;
  let num2 = 1n;

  for (let i = 1; i < iterations; i++) {
    fibonacciNum = num1 + num2;
    num1 = num2;
    num2 = fibonacciNum;
  }

  console.log(fibonacciNum);
  return fibonacciNum;
}

fibonacci(20); // 6765
fibonacci(50); // 12586269025
fibonacci(75); // 2111485077978050
