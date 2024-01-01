function triangle(angleA, angleB, angleC) {
  let arr = [angleA, angleB, angleC].sort((a, b) => a - b);

  if (
    angleA + angleB + angleC !== 180 ||
    angleA === 0 ||
    angleB === 0 ||
    angleC === 0
  ) {
    console.log("invalid");
    return "invalid";
  } else if (arr[2] === 90) {
    console.log("right");
    return "right";
  } else if (arr[2] > 90) {
    console.log("obtuse");
    return "obtuse";
  } else {
    console.log("actute");
    return "actute";
  }
}

triangle(60, 70, 50); // "acute"
triangle(30, 90, 60); // "right"
triangle(120, 50, 10); // "obtuse"
triangle(0, 90, 90); // "invalid"
triangle(50, 50, 50); // "invalid"
