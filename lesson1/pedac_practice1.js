/**
 * Task:
 *  Given building blocks, claculate the remaining amount after bulding the talles possible structre.
 *
 * Explicit:
 *  -Building blocks are cubes
 *  -Structure is layered
 *  -Top layer must be a single block
 *  -A block in an upper layer must be supported by four block below
 *  -Lower blocks can support multiple upper blocks
 *  -No gaps between blocks
 *
 * Implicit:
 *  -Structures can be valid or invalid
 *  -Each layer contians it's number (starting from the top down) squared amount of blocks
 *  -Blocks should always be the same size
 *  -There will not always be leftover blocks
 *  -
 * Questions:
 *  -How many blocks can each cube support
 *  -Does the angle of the cubes matter?
 *  -Are all of the cubes the same size?
 *  -Do the layers have to be vertical?
 *
 * Input: Number of cubes
 * Output: Remaining number of cubes
 *
 *
 * Data Structures: Just numbers (possibly a nested array)
 * [
 * ['x'],
 * ['x', 'x', 'x', 'x'],
 * ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
 * ...
 * ]
 *
 *
 * Algorithm:
 *  -Get a number of building blocks
 *  -Iterate through the structure creation process
 *    -Starting at layer 1, multiply each layer number by itself to determine the amount of blocks used on that layer
 *    -Subtract that amount from the remaining blocks count
 *    -Repeat process after adding 1 to the layer number
 *    -Once there is less blocks than are required for a layer stop
 *  -Return remaining blocks
 */

function calculateLeftoverBlocks(numBlocks) {
  let currentLayer = 0;
  let blocksRequired;

  do {
    blocksRequired = currentLayer * currentLayer;
    if (numBlocks >= blocksRequired) {
      numBlocks -= blocksRequired;
      currentLayer += 1;
    }
  } while (numBlocks > blocksRequired);

  return numBlocks;
}

console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true
