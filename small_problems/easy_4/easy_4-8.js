function swap(string) {
  let wordsArray = string.split(" ");
  let resultArray = [];

  wordsArray.forEach((word) => {
    if (word.length > 1) {
      let first = word.slice(0, 1);
      let last = word.slice(-1);
      let newWord = word.split("");

      newWord[0] = last;
      newWord[newWord.length - 1] = first;
      let finalWord = newWord.join("");
      resultArray.push(finalWord);
    } else {
      resultArray.push(word);
    }
  });
  console.log(resultArray.join(" "));
  return resultArray.join(" ");
}

swap("Oh what a wonderful day it is"); // "hO thaw a londerfuw yad ti si"
swap("Abcde"); // "ebcdA"
swap("a"); // "a"
