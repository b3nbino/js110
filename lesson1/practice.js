let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let obj = {};

flintstones.forEach((elem, idx) => {
  obj[elem] = idx;
});

console.log(obj);

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237,
};

let totalAge = Object.values(ages).reduce((acc, curr) => acc + curr);

console.log(totalAge);

let agesArr = Object.values(ages);
console.log(Math.min(...agesArr)); // => 10

let statement = "The Flintstones Rock";
let freq = {};

statement.split("").forEach((letter) => {
  if (freq.hasOwnProperty(letter)) {
    freq[letter] += 1;
  } else {
    freq[letter] = 1;
  }
});

console.log(freq);
