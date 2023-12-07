/**
 * Task: Sort strings by highest number of adjacent consonants
 * Input: An array of strings
 * Output A sorted array of strings
 *
 * Explicit:
 *  -If multiple string have the same amount of adjacent consonants they should keep their order in relation to eachother
 *  -Consonants are adjacent if they are next to eachother regardless of spaces
 * Implicit:
 *  -Strings have more than just consonants
 *  -String can contian more than one word
 *  -String can be any combination of letters
 *  -A space is a single space character
 *  -There are no other symbols
 *  -All strings are lowercase
 *  -Highest number of consonants goes first
 *  -If there are no adjacent consonants retain origional order
 * Questions:
 *  -What if we have a string with no consonants?
 *  -Are all of the strings words or sentences?
 *
 *
 * Algorithm:
 *  1.Create an empty result array
 *  2.For each element in the given array
 *    -Assign a variable the current element
 *    -Make another empty number array to store corresponding greatest lengths
 *    -Remove whitespace
 *    -Replace vowels with whitespace
 *    -Split string by whitespace
 *    -For each element in resulting array determine length property
 *    -Save greatest length to length array
 *    -Add elements to result array, based on the saved numbers
 *  3.Return result array
 */

function sortStringsByConsonants(givenArray) {
  let resultArray = [];
  let numArray = [0, 0, 0, 0];

  //Turns words into adjacent consonant counts
  for (let i = 0; i < givenArray.length; i++) {
    let bigNum = [];
    //conArray is the array of constants remaining after removing whitespace and replace all vowels with whitespace, then spliting based on whitespace
    let conArray = givenArray[i]
      .replaceAll(" ", "")
      .replaceAll(/a|e|i|o|u/g, " ")
      .split(" ");
    //console.log(conArray);

    //Add greatest amount of adjacent consonants per word to numArray (only if there is more than one consonant next to another)
    //Basically tells us how many adjacent consonants there are per word
    for (let j = 0; j < conArray.length; j++) {
      if (conArray[j].length > 1 && conArray[j].length > numArray[i]) {
        numArray[i] = conArray[j].length;
      }
    }
  }

  //Thse variables and for loop with conditionals place the words into the resultArray based on their adjacent consonant count
  let first = 0;
  let second = 0;
  let third = 0;
  let fourth = 0;
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] > 0) {
      if (numArray[i] > first) {
        first = numArray[i];
        resultArray.unshift(givenArray[i]);
      } else if (numArray[i] > second) {
        second = numArray[i];
        resultArray.splice(1, 0, givenArray[i]);
      } else if (numArray[i] > third) {
        third = numArray[i];
        resultArray.splice(2, 0, givenArray[i]);
      } else if (numArray[i] > fourth) {
        fourth = numArray[i];
        resultArray.splice(3, 0, givenArray[i]);
      }
    } else {
      resultArray.push(givenArray[i]);
    }
  }

  console.log(numArray);
  return resultArray;
}

let list1 = ["aa", "baa", "ccaa", "dddaa"];
console.log(sortStringsByConsonants(list1));
// ['dddaa', 'ccaa', 'aa', 'baa']

let list2 = ["can can", "toucan", "batman", "salt pan"];
console.log(sortStringsByConsonants(list2));
// ['salt pan', 'can can', 'batman', 'toucan']

let list3 = ["bar", "car", "far", "jar"];
console.log(sortStringsByConsonants(list3));
// ['bar', 'car', 'far', 'jar']

let list4 = ["day", "week", "month", "year"];
console.log(sortStringsByConsonants(list4));
// ['month', 'day', 'week', 'year']
