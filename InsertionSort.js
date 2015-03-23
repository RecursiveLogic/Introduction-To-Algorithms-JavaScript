function InsertionSort(array) {
    for (var i = 1; i < array.length; ++i) {
        var key = array[i], j = i - 1;
        // Least to greatest
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = key;
    }
    return array;
}

function InsertionSort(array) {
    for (var i = 1; i < array.length; ++i) {
        var key = array[i], j = i - 1;
        // Greatest to least
        while (j >= 0 && array[j] < key) {
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = key;
    }
    return array;
}