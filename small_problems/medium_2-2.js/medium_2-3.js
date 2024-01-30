function triangle(angle1, angle2, angle3) {
  if (
    angle1 + angle2 + angle3 !== 180 ||
    angle1 < 1 ||
    angle2 < 1 ||
    angle3 < 1
  )
    return "invalid";

  let angles = [angle1, angle2, angle3];
  angles.sort((a, b) => a - b);

  if (angles[2] === 90) {
    return "right";
  } else if (angles[2] > 90) {
    return "obtuse";
  } else {
    return "acute";
  }
}

console.log(triangle(60, 70, 50));
console.log(triangle(30, 90, 60));
console.log(triangle(120, 50, 10));
console.log(triangle(0, 90, 90));
console.log(triangle(50, 50, 50));
// "acute"
// "right"
// "obtuse"
// "invalid"
// "invalid"
