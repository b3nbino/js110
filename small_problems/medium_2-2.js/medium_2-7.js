//Algorithm:
// Take in array
// Use variable to keep track of if a swap has occured
// Iterate through array with do while loop using swap as condition
// If var 1 is gearter than var 2 swap them and reassign swapped to true
// If no swap has occured then swap should be false
// Could use an array to keep track of swaps instead, might want double loop

function bubbleSort(array) {
  let swaps;
  do {
    swaps = [];
    for (let index = 0; index < array.length; index++) {
      let tempVar;
      if (array[index] > array[index + 1]) {
        tempVar = array[index];
        array[index] = array[index + 1];
        array[index + 1] = tempVar;
        swaps.push(true);
      } else {
        swaps.push(false);
      }
    }
  } while (swaps.some((swap) => swap === true));
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1); // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2); // [1, 2, 4, 6, 7]

let array3 = ["Sue", "Pete", "Alice", "Tyler", "Rachel", "Kim", "Bonnie"];
bubbleSort(array3);
console.log(array3); // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
