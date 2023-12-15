let arr = [
  [1, 6, 7],
  [1, 5, 3],
  [1, 8, 3],
];

let newArr = arr.sort((a, b) => {
  return (
    a.reduce((acc, curr) => (curr % 2 === 1 ? acc + curr : acc + 0)) -
    b.reduce((acc, curr) => (curr % 2 === 1 ? acc + curr : acc + 0))
  );
});

console.log(...newArr);
