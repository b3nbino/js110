let rlsync = require("readline-sync");

let numArray = [];

//Gets first five numbers and puts them into an array
for (let index = 1; index < 6; index++) {
  let num = rlsync.question(`Enter number ${index}: `);

  //Tests for valid input
  while (num.search(/[^0-9]/i) !== -1) {
    num = rlsync.question("Invalid input: Please enter a number: ");
  }

  numArray.push(Number(num));
}

//Gets final number
let finalNum = rlsync.question(`Enter final number: `);
//Tests for valid input
while (finalNum.search(/[^0-9]/i) !== -1) {
  finalNum = rlsync.question("Invalid input: Please enter a number: ");
}
finalNum = Number(finalNum);

//Tests finalNum against numArray and prints output
numArray.includes(finalNum)
  ? console.log(`The number ${finalNum} appears in ${numArray.join(",")}.`)
  : console.log(
      `The number ${finalNum} does not appear in ${numArray.join(",")}.`
    );
