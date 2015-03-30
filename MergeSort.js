function MergeSort(array) {
    if (array.length == 1) {
        return array;
    } else if (array.length == 2) {
        if (array[0] <= array[1]) {
            return [array[0], array[1]];
        } else {
            return [array[1], array[0]];
        }
    } else {
        var k = Math.floor(array.length / 2),
            left = array.slice(0, k),
            right = array.slice(k, array.length);
        left = MergeSort(left);
        right = MergeSort(right);
        var i = 0, j = 0, newArray = [];
        while (i < left.length || j < right.length) {
            if (left[i] <= right[j]) {
                if (i < left.length) {
                    newArray.push(left[i]);
                    ++i;
                } else {
                    newArray.push(right[j]);
                    ++j;
                }
            } else {
                if (j < right.length) {
                    newArray.push(right[j]);
                    ++j;
                } else {
                    newArray.push(left[i]);
                    ++i;
                }
            }
        }
        return newArray;
    }
}

