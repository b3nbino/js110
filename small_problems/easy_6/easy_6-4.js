function sequence(num) {
  let array = [];

  for (let index = 1; index <= num; index++) {
    array.push(index);
  }

  console.log(array);
  return array;
}

sequence(5); // [1, 2, 3, 4, 5]
sequence(3); // [1, 2, 3]
sequence(1); // [1]
