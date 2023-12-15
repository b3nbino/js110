let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let newArr = arr.map((array) => {
  let a = [];
  array.forEach((num) => {
    if (num % 3 === 0) {
      a.push(num);
    }
  });
  return a;
});

console.log(...newArr);
