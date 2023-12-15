let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

const even = (element) => element % 2 === 0;

let newArr = arr.filter((obj) => {
  let maybe = false;
  for (let array in obj) {
    if (obj[array].every(even)) {
      maybe = true;
    } else {
      maybe = false;
      break;
    }
  }
  return maybe;
});

console.log(...newArr);
