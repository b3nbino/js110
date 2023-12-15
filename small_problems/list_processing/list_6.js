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

  return finalArray;
}

function palindromes(string) {
  console.log(
    substrings(string).filter(
      (element) =>
        element === element.split("").reverse().join("") && element.length > 1
    )
  );
  return substrings(string).filter(
    (element) =>
      element === element.split("").reverse().join("") && element.length > 1
  );
}

palindromes("abcd"); // []
palindromes("madam"); // [ "madam", "ada" ]

palindromes("hello-madam-did-madam-goodbye");
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes("knitting cassettes");
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
