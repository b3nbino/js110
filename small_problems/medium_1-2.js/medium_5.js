// Write a function that takes a sentence string as an argument and returns that string with every occurrence of a "number word"
//  — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

//Algorithm:
//Replace all number words with their corresponding digit
//Use an array to store number words, in their matching index
//Use a for loop to iterate through the string, looking for the word at the current index
//If the string includes the word at the current index then replace word with index
//Return string

function wordToDigit(string) {
  let numArray = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let result = string;

  for (let currentNumber = 0; currentNumber <= 9; currentNumber++) {
    result = result.replaceAll(numArray[currentNumber], currentNumber);
  }

  console.log(result);
  return result;
}

wordToDigit("Please call me at five five five one two three four. Thanks.");
// "Please call me at 5 5 5 1 2 3 4. Thanks."
