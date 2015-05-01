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

// Random Value Matrix Generator
function MatrixRandomGen(row, col) {
    var array = [];
    for (var i = 0; i < row; ++i) {
        array[i] = [];
        for (var j = 0; j < col; ++j) {
            array[i][j] = Math.floor(Math.random() * 100);
        }
    }
    return array;
}