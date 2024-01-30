//Algorithm
//Use a recursive function
//Stopping criteria will be when the fibb number is 1
//If the fib number is not 1 then call the function again using fibb(current fibb number) + fibb(current fibb number - 1)

function fibonacci(fibCount) {
  if (fibCount <= 2) return 1;

  return fibonacci(fibCount - 2) + fibonacci(fibCount - 1);
}

// 1
// 1
// 2
// 3
// 5
// 144
// 6765

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(12));
console.log(fibonacci(20));
