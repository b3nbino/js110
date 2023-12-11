function doubleConsonants(string) {
  let finalArray = [];

  for (let index = 0; index < string.length; index++) {
    if (!'aeiouAEIOU 123456789 ?!.,-@#$%^&*()":;'.includes(string[index])) {
      finalArray.push(string[index], string[index]);
    } else {
      finalArray.push(string[index]);
    }
  }

  console.log(finalArray.join(""));
  return finalArray.join("");
}

doubleConsonants("String"); // "SSttrrinngg"
doubleConsonants("Hello-World!"); // "HHellllo-WWorrlldd!"
doubleConsonants("July 4th"); // "JJullyy 4tthh"
doubleConsonants(""); // ""
