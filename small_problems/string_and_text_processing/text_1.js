function isUppercase(string) {
  console.log(string === string.toUpperCase());
  return string === string.toUpperCase();
}

isUppercase("t"); // false
isUppercase("T"); // true
isUppercase("Four Score"); // false
isUppercase("FOUR SCORE"); // true
isUppercase("4SCORE!"); // true
isUppercase(""); // true
