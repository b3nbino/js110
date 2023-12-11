function stringToInteger(string) {
  let final = 0;

  for (let i = 0; i < string.length; i++) {
    let place = Math.pow(10, string.length - 1 - i);
    // console.log(place);

    final += findNum(string[i]) * place;
  }
  return final;
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
  }
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
