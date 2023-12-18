function rotateArray(array) {
  if (!Array.isArray(array)) {
    return undefined;
  } else if (array.length === 0) {
    return [];
  }

  return array.slice(1).concat(array.slice(0, 1)).join("");
}

function maxRotation(num) {
  num = num.toString();

  for (let i = 0; i < num.length; i++) {
    num = num.slice(0, i) + rotateArray(num.slice(i).split(""));
  }

  console.log(Number(num));
  return Number(num);
}

maxRotation(735291); // 321579
maxRotation(3); // 3
maxRotation(35); // 53
maxRotation(105); // 15 -- the leading zero gets dropped
maxRotation(8703529146); // 7321609845
