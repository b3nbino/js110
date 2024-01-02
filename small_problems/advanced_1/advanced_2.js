function transpose(matrix) {
  let finalMatrix = [[], [], []];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      finalMatrix[i][j] = matrix[j][i];
    }
  }

  return finalMatrix;
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let newMatrix = transpose(matrix);

console.log(...newMatrix); // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(...matrix); // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
