let arr = [
  ["b", "c", "a"],
  [2, 11, -3],
  ["blue", "black", "green"],
];

let final = arr.map((array) => {
  let arrayCopy = array.slice();
  if (typeof array[0] === "string") {
    arrayCopy.sort();
  } else {
    arrayCopy.sort((a, b) => a - b);
  }
  return arrayCopy;
});
console.log(...final);
