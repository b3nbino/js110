function triangle(sideA, sideB, sideC) {
  let arr = [sideA, sideB, sideC].sort((a, b) => a - b);

  if (sideA === 0 || sideB === 0 || sideC === 0) {
    console.log("invalid");
    return "invalid";
  } else if (arr[0] + arr[1] <= arr[2]) {
    console.log("invalid");
    return "invalid";
  } else if (sideA === sideB && sideB === sideC) {
    console.log("equilateral");
    return "equilateral";
  } else if (sideA === sideB || sideA === sideC || sideB === sideC) {
    console.log("iscosceles");
    return "iscosceles";
  } else {
    console.log("scalene");
    return "scalene";
  }
}

triangle(3, 3, 3); // "equilateral"
triangle(3, 3, 1.5); // "isosceles"
triangle(3, 4, 5); // "scalene"
triangle(0, 3, 3); // "invalid"
triangle(3, 1, 1); // "invalid"
