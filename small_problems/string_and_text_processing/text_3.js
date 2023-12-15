function isUppercase(string) {
  return string === string.toUpperCase();
}

function letterCaseCount(string) {
  let counter = { lowercase: 0, uppercase: 0, neither: 0 };

  string.split("").forEach((char) => {
    if (char.search(/[a-z]/i) !== -1) {
      if (isUppercase(char)) {
        counter.uppercase += 1;
      } else {
        counter.lowercase += 1;
      }
    } else {
      counter.neither += 1;
    }
  });

  console.log(counter);
  return counter;
}

letterCaseCount("abCdef 123"); // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount("AbCd +Ef"); // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount("123"); // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount(""); // { lowercase: 0, uppercase: 0, neither: 0 }
