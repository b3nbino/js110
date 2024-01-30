//Algorithm:
// Assign lengths to array
// Sort array by length
// If all sides equal return equilateral
// If first two equal but not third, return isoceles
// If all sides different lengths, return scalene
// If greatest side length is greater than first two sides combined, return invalid

function triangle(side1, side2, side3) {
  let sides = [side1, side2, side3];
  sides.sort((a, b) => a - b);

  if (
    sides[0] + sides[1] < sides[2] ||
    sides[0] === 0 ||
    sides[1] === 0 ||
    sides[2] === 0
  ) {
    return "invalid";
  } else if (sides[0] === sides[1] && sides[1] === sides[2]) {
    return "equilateral";
  } else if (sides[0] === sides[1] || sides[1] === sides[2]) {
    return "isoceles";
  } else if (
    sides[0] !== sides[1] &&
    sides[1] !== sides[2] &&
    sides[0] !== sides[2]
  ) {
    return "scalene";
  }
}

console.log(triangle(3, 3, 3));
console.log(triangle(3, 3, 1.5));
console.log(triangle(3, 4, 5));
console.log(triangle(0, 3, 3));
console.log(triangle(3, 1, 1));

// "equilateral"
// "isosceles"
// "scalene"
// "invalid"
// "invalid"
