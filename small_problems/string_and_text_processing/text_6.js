function staggeredCase(string) {
  let finalString = "";

  for (let index = 0; index < string.length; index++) {
    if (string[index].match(/[a-z]/i)) {
      if (index % 2 === 0) {
        finalString += string[index].toUpperCase();
      } else {
        finalString += string[index].toLowerCase();
      }
    } else {
      finalString += string[index];
    }
  }

  console.log(finalString);
  return finalString;
}

staggeredCase("I Love Launch School!"); // "I LoVe lAuNcH ScHoOl!"
staggeredCase("ALL_CAPS"); // "AlL_CaPs"
staggeredCase("ignore 77 the 4444 numbers"); // "IgNoRe 77 ThE 4444 nUmBeRs"
