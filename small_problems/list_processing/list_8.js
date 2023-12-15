function buyFruit(twoDArray) {
  let finalArray = [];

  twoDArray.forEach((arr) => {
    for (let index = 0; index < arr[1]; index++) {
      finalArray.push(arr[0]);
    }
  });

  console.log(finalArray);
  return finalArray;
}

buyFruit([
  ["apple", 3],
  ["orange", 1],
  ["banana", 2],
]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
