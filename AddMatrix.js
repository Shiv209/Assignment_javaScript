function addMatrices(matrix1, matrix2) {
    const result = [];
    for (let i = 0; i < matrix1.length; i++) {
        result[i] = [];
        for (let j = 0; j < matrix1[i].length; j++) {
            result[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }
    return result;
}

const matrix1 = [[1, 2, 3], [4, 5, 6]];
const matrix2 = [[7, 8, 9], [10, 11, 12]];

let getAddition = addMatrices(matrix1, matrix2);
console.log(`Addition of two Matrix is: ${getAddition}`);
