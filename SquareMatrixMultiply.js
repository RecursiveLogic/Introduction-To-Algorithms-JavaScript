function SquareMatrixMultiply(a, b) {
    var result = [];
    for (var i = 0; i < a.length; ++i) {
        result[i] = [];
        for (var j = 0; j < b[0].length; ++j) {
            var sum = 0;
            for (var k = 0; k < a[0].length; ++k) {
                sum += a[i][k] * b[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}

// Matrix Generator 
function MatrixGen(row, col, value) {
    var array = [];
    for (var i = 0; i < row; ++i) {
        array[i] = [];
        for (var j = 0; j < col; ++j) {
            array[i][j] = value;
        }
    }
    return array;
}

// Recursive Square Matrix Mutliply 
// Still needs to be fixed, I'll get to that later!
function SquareMatrixMultiplyRecursive(a, b) {
    var C = [[,],[,]];
    if (a.length == 0) {
        return C[0][0] = a[0][0] * b[0][0];
    } else {
        C[0][0] = SquareMatrixMultiplyRecursive(a[0][0], b[0][0]) 
                + SquareMatrixMultiplyRecursive(a[0][1], b[1][0]);
        C[0][1] = SquareMatrixMultiplyRecursive(a[0][0], b[0][1])
                + SquareMatrixMultiplyRecursive(a[0][1], b[1][1]);
        C[1][0] = SquareMatrixMultiplyRecursive(a[1][0], b[0][0])
                + SquareMatrixMultiplyRecursive(a[1][1], b[1][0]);
        C[1][1] = SquareMatrixMultiplyRecursive(a[1][0], b[0][1])
                + SquareMatrixMultiplyRecursive(a[1][1], b[1][1]);
    }
}