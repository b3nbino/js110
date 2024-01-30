// Write a function that rotates the last count digits of a number. To perform the rotation,
// move the first of the digits that you want to rotate to the end and shift the remaining digits to the left.

//Algorithm:
//Make number into string
//Turn string into array
//Make slice of array of the digits that we want to rotate and digits prior
//Pass rotating digits into rotate function
//Concatenate non changed digit array with rotated digits array
//Join array into string
//Turn string into number
//Return number

function rotateRightmostDigits(num, digitsToRotate) {
  let numString = num.toString();
  let numArray = numString.split("");
  let arrayFirstHalf = numArray.slice(0, -digitsToRotate);
  let arraySecondHalf = numArray.slice(-digitsToRotate);

  let finalArray = arrayFirstHalf.concat(rotateArray(arraySecondHalf));
  return Number(finalArray.join(""));
}

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

rotateRightmostDigits(735291, 1); // 735291
rotateRightmostDigits(735291, 2); // 735219
rotateRightmostDigits(735291, 3); // 735912
rotateRightmostDigits(735291, 4); // 732915
rotateRightmostDigits(735291, 5); // 752913
rotateRightmostDigits(735291, 6); // 352917
