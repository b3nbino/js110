function staggeredCase(string) {
  let finalString = "";
  let i = 0;

  for (let index = 0; index < string.length; index++) {
    if (string[index].match(/[a-z]/i)) {
      if (i % 2 === 0) {
        finalString += string[index].toUpperCase();
      } else {
        finalString += string[index].toLowerCase();
      }
      i++;
    } else {
      finalString += string[index];
    }
  }

  console.log(finalString);
  return finalString;
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);
