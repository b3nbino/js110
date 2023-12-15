function swapCase(string) {
  let newString = string
    .split("")
    .map((char) => {
      if (char.match(/[a-z]/)) {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
    })
    .join("");

  console.log(newString);
  return newString;
}

swapCase("CamelCase"); // "cAMELcASE"
swapCase("Tonight on XYZ-TV"); // "tONIGHT ON xyz-tv"
