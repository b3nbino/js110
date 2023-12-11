function repeater(string) {
  let finalArray = [];

  for (let index = 0; index < string.length; index++) {
    finalArray.push(string[index], string[index]);
  }

  console.log(finalArray.join(""));
  return finalArray.join("");
}

repeater("Hello"); // "HHeelllloo"
repeater("Good job!"); // "GGoooodd  jjoobb!!"
repeater(""); // ""
