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