function substrings(string) {
  let stringArray = string.split("");
  let tempArray = [];
  let finalArray = [];

  for (let i = 0; i <= stringArray.length; i++) {
    for (let j = 0; j <= stringArray.length; j++) {
      tempArray.push(stringArray.slice(i, j).join(""));
    }
  }

  finalArray = tempArray.filter((element) => element !== "");

  console.log(finalArray);
  return finalArray;
}

substrings("abcde");

// returns
[
  "a",
  "ab",
  "abc",
  "abcd",
  "abcde",
  "b",
  "bc",
  "bcd",
  "bcde",
  "c",
  "cd",
  "cde",
  "d",
  "de",
  "e",
];
