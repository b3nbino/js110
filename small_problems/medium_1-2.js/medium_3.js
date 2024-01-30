// Take the number 735291 and rotate it by one digit to the left, getting 352917.
// Next, keep the first digit fixed in place and rotate the remaining digits to get 329175.
// Keep the first two digits fixed in place and rotate again to get 321759.
// Keep the first three digits fixed in place and rotate again to get 321597.
// Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579.
// The resulting number is called the maximum rotation of the original number.

// Write a function that takes an integer as an argument and returns the maximum rotation of that integer.
//  You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

//Algorithm:
//Pass number into rotateRightMost as a whole, then all but the first digit, then all but the second digit, until we reach the end.
//Use a for loop to iterate through rotations
//For loop should start with length of number, amount of digits and decrease
//Reassign a variable to hold the result each time, then pass the result back in until no more digits
//Return result number

function rotateArray(array) {
  if (Array.isArray(array) && array.length === 0) {
    return [];
  } else if (!Array.isArray(array)) {
    return undefined;
  }

  let arrayCopy = array.slice();
  let firstElement = arrayCopy.shift();
  arrayCopy.push(firstElement);

  return arrayCopy;
}

function rotateRightmostDigits(num, digitsToRotate) {
  let numString = num.toString();
  let numArray = numString.split("");
  let arrayFirstHalf = numArray.slice(0, -digitsToRotate);
  let arraySecondHalf = numArray.slice(-digitsToRotate);

  let finalArray = arrayFirstHalf.concat(rotateArray(arraySecondHalf));
  return Number(finalArray.join(""));
}

function maxRotation(num) {
  let result = num;
  let numLength = num.toString().length;

  for (let i = numLength; i > 0; i--) {
    result = rotateRightmostDigits(result, i);
  }

  console.log(result);
  return result;
}

maxRotation(735291); // 321579
maxRotation(3); // 3
maxRotation(35); // 53
maxRotation(105); // 15 -- the leading zero gets dropped
maxRotation(8703529146); // 7321609845
