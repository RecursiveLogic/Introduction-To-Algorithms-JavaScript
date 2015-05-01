function BubbleSort(array) {
    for (var i = 0; i < array.length; ++i) {
        for (var j = array.length - 1; j >= i; --j) {
            // Least to greatest
            if (array[j - 1] > array[j]) {
                var key = array[j];
                array[j] = array[j - 1];
                array[j - 1] = key;
            }
        }
    }
    return array;
}

function BubbleSort(array) {
    for (var i = 0; i < array.length; ++i) {
        for (var j = array.length - 1; j >= i; --j) {
            // Greatest to least
            if (array[j - 1] < array[j]) {
                var key = array[j];
                array[j] = array[j - 1];
                array[j - 1] = key;
            }
        }
    }
    return array;
}