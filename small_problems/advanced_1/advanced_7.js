/**
 * PEDAC for Advanced 7: Binary search
 *
 * Rules:
 * - Create a binary search function that takes two parameters
 *  - A sorted array
 *  - An element to search for
 * - Binary search dictates that we determine which half the desired element will be in
 * by looking at the middle element of the array
 * - Return the index of element in question
 *
 * Questions:
 * - How do we find the index?
 *  - If element is in first half do not add to return value else add length of first half, minus one
 * - Will array always be sorted least -> greatest? does it matter if vice versa?
 *
 * Data Structures:
 * - Taking in a one dimensional array of primitives + primitive value
 * - Return single primitive value
 * - Recursive function
 *
 * Algorithm:
 * Step 1: Find middle value
 *  - If value is desired value then return it's index
 *  - If value is less than desired value then return length of bottom half of array
 *  - If value is greater than desired value then return 0
 *  - If array length is one but element does not equal desired value then return one
 * Step 2: Repeat until desired value equals middle value
 * Step 3: Return current return value + the return value of another call of this function with desired array half
 *  - If returning -1, send -1 through without adding anything to it
 */

function binarySearch(array, value) {
  let middleIndex = Math.floor((array.length - 1) / 2);
  let nextReturn;

  if (array[middleIndex] === value) {
    return middleIndex;
  }

  if (array[middleIndex] < value) {
    nextReturn = binarySearch(array.slice(middleIndex + 1), value);
    if (nextReturn === -1) {
      return -1;
    } else {
      return 1 + middleIndex + nextReturn;
    }
  } else if (array[middleIndex] > value) {
    nextReturn = binarySearch(array.slice(0, middleIndex), value);
    if (nextReturn === -1) {
      return -1;
    } else {
      return 0 + nextReturn;
    }
  }
  return -1;
}

let yellowPages = [
  "Apple Store",
  "Bags Galore",
  "Bike Store",
  "Donuts R Us",
  "Eat a Lot",
  "Good Food",
  "Pasta Place",
  "Pizzeria",
  "Tiki Lounge",
  "Zooper",
];
// 7
// 0

// -1
// 7
// 1

// -1
// 6

console.log(binarySearch(yellowPages, "Pizzeria"));
console.log(binarySearch(yellowPages, "Apple Store"));
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));
console.log(
  binarySearch(
    ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"],
    "Peter"
  )
);
console.log(
  binarySearch(
    ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"],
    "Tyler"
  )
);
