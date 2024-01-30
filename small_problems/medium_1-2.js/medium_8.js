function fibonacci(fibCount) {
  let num1 = 0;
  let num2 = 1;
  let fibNum;
  fibCount -= 1;

  while (fibCount > 0) {
    fibNum = num1 + num2;
    num1 = num2;
    num2 = fibNum;
    fibCount -= 1;
  }

  console.log(fibNum);
  return fibNum;
}

fibonacci(20); // 6765
fibonacci(50); // 12586269025
fibonacci(75); // 2111485077978050
