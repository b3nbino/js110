function removeVowels(arr) {
  let finalArray = arr.map((string) => {
    return string
      .split("")
      .filter((char) => {
        if ("aeiouAEIOU".includes(char)) {
          return false;
        } else {
          return true;
        }
      })
      .join("");
  });

  console.log(finalArray);
  return finalArray;
}

removeVowels(["abcdefghijklmnopqrstuvwxyz"]); // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(["green", "YELLOW", "black", "white"]); // ["grn", "YLLW", "blck", "wht"]
removeVowels(["ABC", "AEIOU", "XYZ"]); // ["BC", "", "XYZ"]
