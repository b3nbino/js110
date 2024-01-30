//Algorithm:
//During each call of the function:
//If seenFibs already has a property for a specific fibCount then immediatley return the value stored there
//If seenFibs doesn't already have that value then add the value that the subsequent calls return

let seenFibs = {};

function fibonacci(fibCount) {
  if (fibCount <= 2) {
    return 1;
  } else if (seenFibs.hasOwnProperty(fibCount)) {
    return seenFibs[fibCount];
  } else {
    seenFibs[fibCount] = fibonacci(fibCount - 1) + fibonacci(fibCount - 2);
    return seenFibs[fibCount];
  }
}

console.log(fibonacci(6));
console.log(fibonacci(50));
