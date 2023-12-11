function countOccurrences(array) {
  let counter = {};

  array.forEach((element) => {
    if (counter.hasOwnProperty(element)) {
      counter[element] += 1;
    } else {
      counter[element] = 1;
    }
  });

  for (let property in counter) {
    console.log(`${property} => ${counter[property]}`);
  }
}

let vehicles = [
  "car",
  "car",
  "truck",
  "car",
  "SUV",
  "truck",
  "motorcycle",
  "suv",
  "motorcycle",
  "car",
  "truck",
];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1
