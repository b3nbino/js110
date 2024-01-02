function transpose(matrix) {
  let finalMatrix = [];
  let newRowsCount = matrix[0].length;

  for (let i = 0; i < newRowsCount; i += 1) {
    finalMatrix.push([]);
  }

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      finalMatrix[j].push(matrix[i][j]);
    }
  }

  return finalMatrix;
}

const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1],
];

let newMatrix = transpose(matrix);

console.log(...newMatrix); // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
console.log(...matrix); // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

transpose([[1, 2, 3, 4]]); // [[1], [2], [3], [4]]
transpose([[1], [2], [3], [4]]); // [[1, 2, 3, 4]]
transpose([[1]]); // [[1]]

transpose([
  [1, 2, 3, 4, 5],
  [4, 3, 2, 1, 0],
  [3, 7, 8, 6, 2],
]);
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
