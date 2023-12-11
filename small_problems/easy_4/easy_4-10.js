function stringToSignedInteger(string) {
  let final = 0;

  if (!(string[0] === "-")) {
    for (let i = 0; i < string.length; i++) {
      let place = Math.pow(10, string.length - 1 - i);

      final += findNum(string[i]) * place;
    }
    return final;
  } else {
    for (let i = 1; i < string.length; i++) {
      let place = Math.pow(10, string.length - 1 - i);

      final += findNum(string[i]) * place;
    }
    return final * -1;
  }
}

function findNum(char) {
  switch (char) {
    case "0":
      return 0;
    case "1":
      return 1;
    case "2":
      return 2;
    case "3":
      return 3;
    case "4":
      return 4;
    case "5":
      return 5;
    case "6":
      return 6;
    case "7":
      return 7;
    case "8":
      return 8;
    case "9":
      return 9;
    case "+":
      return 0;
    case "-":
      return -1;
  }
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
