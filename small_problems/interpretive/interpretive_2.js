/**
 * PEDAC for Interpretive 2: Diamonds
 *
 * Rules:
 * - Write a function that takes a number n
 *  - n must be an odd integer
 * - Function should then display a four pointed diamond in an n x n grid
 *  - Center row of diamond should have n characters and there should be n lines
 *  - Each row leading up to the diamond should have two more than the one previous, starting at one
 *
 * Data Structures:
 * - Take in an odd integer
 * - Display strings
 *
 * Questions:
 *
 *
 * Algorithm:
 * Step 1: Use a for loop to log each row leading up to the center until index equals n
 * Step 2: Print a line with n characters
 * Step 3: Use another for loop to print lines with reducing characters
 */

function diamond(num) {
  const CHAR = "*";
  let reverseNum = Math.round(num / 2);

  //logs rows starting with one star, adding two to the count each iteration, also pads with appropriate amount of spacing
  for (let i = 1; i < num; i += 2) {
    console.log(CHAR.repeat(i).padStart(reverseNum, " "));
    reverseNum += 1;
  }
  console.log(CHAR.repeat(num));
  //reverse of previous for loop
  for (let i = num - 2; i > 0; i -= 2) {
    reverseNum -= 1;
    console.log(CHAR.repeat(i).padStart(reverseNum, " "));
  }
}

diamond(1);
diamond(3);
diamond(9);
