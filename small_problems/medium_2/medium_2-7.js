function bubbleSort(array) {
  let sorted = false;
  let storeElement;

  while (sorted === false) {
    let j = 1;
    let swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[j]) {
        storeElement = array[i];
        array[i] = array[j];
        array[j] = storeElement;
        swapped = true;
      }
      j++;
    }
    if (swapped === false) sorted = true;
  }

  return array;
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
