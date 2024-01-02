function rotate90(matrix) {
  let finalMatrix = [];
  let newRowsCount = matrix[0].length;

  for (let i = 0; i < newRowsCount; i += 1) {
    finalMatrix.push([]);
  }

  for (let i = matrix.length - 1; i >= 0; i -= 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      finalMatrix[j].push(matrix[i][j]);
    }
  }

  return finalMatrix;
}

let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
console.log(...newMatrix1); // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]

let newMatrix2 = rotate90(matrix2);
console.log(...newMatrix2); // [[5, 3], [1, 7], [0, 4], [8, 2]]

let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));
console.log(...newMatrix3); // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]
