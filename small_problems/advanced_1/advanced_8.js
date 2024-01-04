/**
 * PEDAC for Advanced 8: Egyptian Fractions
 *
 * Rules:
 * - Create two functions
 *  - One function must take a rational number argument and return an ARRAY of denominators that are part of the rational number as an egyptian fratcion
 *  - The other function must take an array of egyptian fraction denominators and return the resulting rational number
 * - All egyptain fractions use unit fractions (1/n)
 *
 * Data Structures:
 * - Take in a Fraction
 * - Return an array
 * -----------------------------------------------
 * - Take in an array
 * - Return a decimal number (floating point)
 *
 * Questions:
 * - How do I work with Fraction package?
 *
 * Algorithm:
 * egyptian()
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Step 1: If fraction(1/n) + preivous fractions < specified rational number add n to denominators array, iterating from n = 1 up
 * Step 2: Once sum of unit fractions === specified rational number, return array containing denominators
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 *
 * unegyptian()
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Step 1: Iterate through array adding 1/n (n being each element in the array) to sum fraction
 * Step 2: Return sum fraction
 *
 */

var Fraction = require("fraction.js");

function egyptian(num) {
  let denominators = [];
  let sumFraction = new Fraction(0, 1);
  let n = 1;
  let nextUnit;

  //If a fraction with a denominator of n can be added without going over the argument, add it and the denominator to corresponding variables
  while (!sumFraction.equals(num)) {
    nextUnit = new Fraction(1, n);
    if (sumFraction.add(nextUnit) <= num) {
      sumFraction = sumFraction.add(nextUnit);
      denominators.push(n);
    }
    n++;
  }

  return denominators;
}

function unegyptian(nList) {
  let sumFraction = new Fraction(0, 1);

  for (let nIndex = 0; nIndex < nList.length; nIndex++) {
    let currentFraction = new Fraction(1, nList[nIndex]);
    sumFraction = sumFraction.add(currentFraction);
  }

  return sumFraction.toFraction();
}

console.log(egyptian(new Fraction(2, 1))); // -> [1, 2, 3, 6]
console.log(egyptian(new Fraction(137, 60))); // -> [1, 2, 3, 4, 5]
console.log(egyptian(new Fraction(3, 1))); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]

console.log(unegyptian(egyptian(new Fraction(1, 2)))); // logs 0.5
console.log(unegyptian(egyptian(new Fraction(3, 4)))); // logs 0.75
console.log(unegyptian(egyptian(new Fraction(39, 20)))); // logs 1.95
console.log(unegyptian(egyptian(new Fraction(127, 130)))); // logs 0.9769230769230768
console.log(unegyptian(egyptian(new Fraction(5, 7)))); // logs 0.7142857142857142
console.log(unegyptian(egyptian(new Fraction(1, 1)))); // logs 1
console.log(unegyptian(egyptian(new Fraction(2, 1)))); // logs 2
console.log(unegyptian(egyptian(new Fraction(3, 1)))); // logs 3
