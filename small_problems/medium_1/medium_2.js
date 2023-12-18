function rotateArray(array) {
  if (!Array.isArray(array)) {
    return undefined;
  } else if (array.length === 0) {
    return [];
  }

  return array.slice(1).concat(array.slice(0, 1));
}

function rotateRightmostDigits(num, count) {
  num = num.toString();
  let countNum = num.slice(-count);
  let finalNum =
    num.slice(0, -count) + rotateArray(countNum.split("")).join("");

  console.log(finalNum);
  return Number(finalNum);
}

rotateRightmostDigits(735291, 1); // 735291
rotateRightmostDigits(735291, 2); // 735219
rotateRightmostDigits(735291, 3); // 735912
rotateRightmostDigits(735291, 4); // 732915
rotateRightmostDigits(735291, 5); // 752913
rotateRightmostDigits(735291, 6); // 352917
