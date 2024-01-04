/**
 * PEDAC for Advanced 6: Merge Sort
 *
 * Rules:
 * - Write a function
 * - Function must take an array argument and return a NEW array
 * - New array should be sorted from least -> greatest using merge sort
 *    -Merge sort examples dictate that each array be broken down into single element arrays, then merged back together in order
 * - All elements of each array will be the same data type
 * - Can use merge function from Advanced 5
 *
 * Data types:
 * - One dimensional array argument
 * - Nested array structure
 * - Return one dimensional array
 *
 * Algorithm:
 *  Step 1: Create two new empty array variables each with half of original array
 *  Step 2: Repeat until only single elements remain in arrays
 *  Step 3: Merge all arrays (possibly one layer at a time)
 *           - Can combine using merge function in only two passes
 *  Step 4: Return NEW sorted array
 *
 * Questions:
 * - How can I easily create nested sub-arrays?
 */

function merge(array1, array2) {
  let copy1 = array1.slice().sort((a, b) => a - b);
  let copy2 = array2.slice().sort((a, b) => a - b);
  let finalArray = [];

  while (copy1.length > 0 || copy2.length > 0) {
    if (copy1[0] <= copy2[0]) {
      finalArray.push(copy1.shift());
    } else if (copy2[0] <= copy1[0]) {
      finalArray.push(copy2.shift());
    } else {
      finalArray.push(copy1[copy1.length - 1] ? copy1.shift() : copy2.shift());
    }
  }

  return finalArray;
}

function mergeSort(array) {
  if (array.length === 1) return array;

  //Divide array into sub-arrays
  let firstHalf = array.slice(0, array.length / 2);
  let secondHalf = array.slice(array.length / 2);

  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

console.log(mergeSort([9, 5, 7, 1])); // [1, 5, 7, 9]
console.log(mergeSort([5, 3])); // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4])); // [1, 2, 4, 6, 7]

console.log(
  mergeSort(["Sue", "Pete", "Alice", "Tyler", "Rachel", "Kim", "Bonnie"])
);
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(
  mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46])
);
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]
