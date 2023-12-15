let arr = [
  ["b", "c", "a"],
  [2, 11, -3],
  ["blue", "black", "green"],
];

let final2 = arr.map((array) => {
  let arrayCopy = array.slice();
  if (typeof array[0] === "string") {
    arrayCopy.sort((a, b) => {
      if (a < b) {
        return 1;
      } else if (a > b) {
        return -1;
      } else {
        return 0;
      }
    });
  } else {
    arrayCopy.sort((a, b) => b - a);
  }
  return arrayCopy;
});
console.log(...final2);
