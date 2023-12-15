function isBalanced(string) {
  let parArray = string.match(/\(|\)/g) ?? [];
  let parCounter = 0;

  //If a string has an odd number of parenthesis it must be unbalanced
  if (parArray.length % 2 !== 0) {
    return false;
  }

  //If there is one on the left, increase the counter, then decrease if it has one corresponding to it
  for (let i = 0; i < parArray.length; i++) {
    if (parArray[i] === "(") {
      parCounter += 1;
    } else if (parCounter > 0 && parArray[i] === ")") {
      parCounter -= 1;
    }
  }
  return parCounter === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
