/**
 * PEDAC for Interpretive 3: Now I Know my ABCs
 *
 * Rules:
 * - Write a function that determines if a word can be formed using your letter blocks
 * - Letter blocks have the a letter and the letter 13 letters after or before itself
 * - Letter blocks can only be used one time
 * - Letter blocks cannot be used if the corresponsing letter has already been used
 *
 * Data Structures:
 * - Array with letter status
 * - Object with Letter index
 * - Arrays with block remaining status (likely boolean)
 * - Return boolean
 *
 * Questions:
 *
 *
 * Algorithm:
 * Step 1: Iterate through each letter of the word testing if it has been used
 *  - If block hasn't been used switch object letter value to false
 *  - If block has already been used return false
 * Step 2: If all blocks are used only once return true else return false
 *
 */

function isBlockWord(string) {
  let letterStatus = [
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ];
  let letterBlocks = {
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    F: 5,
    G: 6,
    H: 7,
    I: 8,
    J: 9,
    K: 10,
    L: 11,
    M: 12,
    N: 0,
    O: 1,
    P: 2,
    Q: 3,
    R: 4,
    S: 5,
    T: 6,
    U: 7,
    V: 8,
    W: 9,
    X: 10,
    Y: 11,
    Z: 12,
  };
  string = string.toUpperCase();

  for (let index = 0; index < string.length; index++) {
    letterUnused = letterStatus[letterBlocks[string[index]]];
    if (letterUnused) {
      letterStatus[letterBlocks[string[index]]] = false;
    } else {
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
}

isBlockWord("BATCH"); // true
isBlockWord("BUTCH"); // false
isBlockWord("jest"); // true
