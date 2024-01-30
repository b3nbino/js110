// Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

// If the input is not an array, return undefined.
// If the input is an empty array, return an empty array.
// Review the test cases below, then implement the solution accordingly.

//Algorithm:
//Use guard clauses for non array and empty array
//Remove and store first element
//Put first element into end of array
//Return array

function rotateArray(array) {
  if (Array.isArray(array) && array.length === 0) {
    console.log([]);
    return [];
  } else if (!Array.isArray(array)) {
    console.log(undefined);
    return undefined;
  }

  let arrayCopy = array.slice();
  let firstElement = arrayCopy.shift();
  arrayCopy.push(firstElement);

  console.log(arrayCopy);
  return arrayCopy;
}

rotateArray([7, 3, 5, 2, 9, 1]); // [3, 5, 2, 9, 1, 7]
rotateArray(["a", "b", "c"]); // ["b", "c", "a"]
rotateArray(["a"]); // ["a"]
rotateArray([1, "a", 3, "c"]); // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]); // [[1, 2], 3, { a: 2 }]
rotateArray([]); // []
rotateArray("a");

// return `undefined` if the argument is not an array
rotateArray(); // undefined
rotateArray(1); // undefined

// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array); // [2, 3, 4, 1]
array; // [1, 2, 3, 4]
console.log(array);
