//Algorithm:
// Using for loop and variable to keep track
// Go through all indicies less than number, if number % index is ever 0 then that number is not prime so update variable

function is_prime(num) {
  if (num === 1) return false;
  let prime = true;

  for (let index = 2; index < num; index++) {
    if (num % index === 0) {
      prime = false;
    }
  }
  return prime;
}

console.log(is_prime(1) === false); // true
console.log(is_prime(2) === true); // true
console.log(is_prime(3) === true); // true
console.log(is_prime(4) === false); // true
console.log(is_prime(5) === true); // true
console.log(is_prime(6) === false); // true
console.log(is_prime(7) === true); // true
console.log(is_prime(8) === false); // true
console.log(is_prime(9) === false); // true
console.log(is_prime(10) === false); // true
console.log(is_prime(23) === true); // true
console.log(is_prime(24) === false); // true
console.log(is_prime(997) === true); // true
console.log(is_prime(998) === false); // true
console.log(is_prime(3_297_061) === true); // true
console.log(is_prime(23_297_061) === false); // true
