/**
 * PEDAC for Interpretive 4: Seeing Stars
 *
 * Rules:
 * - Write a function that takes in a number n and logs an eight pointed n x n star
 * - n is an odd integer
 * - n will be at least 7
 * - spaces = 2 + (n - 7) / 2
 *
 * Data Structure:
 * - Take in num of n
 * - Log strings to console
 *
 * Questions:
 *
 *
 * Algorithm:
 * Step 1: Get n
 * Step 2: Determine initial number of spaces
 * Step 3: Iterate through printing stars and spaces
 *  - Print star with no padding to begin, then spaces, then star, then spaces (pad -> star -> spaces -> star -> spaces -> star)
 *  - Increase amount of padding by one each iteration, decrease amount of spaces by one each iteration
 *  - After there are no spaces print a line with n stars
 *  - Repeat in reverse
 *
 */

function star(n) {
  let spaces = 2 + (n - 7) / 2;
  let pad = 0;

  //Top half
  for (let index = 0; index < Math.floor(n / 2); index++) {
    console.log(
      " ".repeat(pad) +
        "*" +
        " ".repeat(spaces) +
        "*" +
        " ".repeat(spaces) +
        "*"
    );
    spaces -= 1;
    pad += 1;
  }
  //Middle
  console.log("*".repeat(n));
  //Bottom half
  for (let index = 0; index < Math.floor(n / 2); index++) {
    spaces += 1;
    pad -= 1;
    console.log(
      " ".repeat(pad) +
        "*" +
        " ".repeat(spaces) +
        "*" +
        " ".repeat(spaces) +
        "*"
    );
  }
}

star(7);
star(9);
star(11);
star(21);
