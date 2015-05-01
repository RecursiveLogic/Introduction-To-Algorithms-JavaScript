function MergeSort(array) {
    if (array.length < 2) {
        return array;
    } else if (array.length == 2) {
        if (array[0] <= array[1]) {
            return [array[0], array[1]];
        } else {
            return [array[1], array[0]];
        }
    } else {
        var middle = Math.floor(array.length / 2);
        var left = array.slice(0, middle);
        var right = array.slice(middle, array.length);
        left = MergeSort(left);
        right = MergeSort(right);
        var i = 0, j = 0, output = [];
        while (i < left.length || j < right.length) {
            if (left[i] <= right[j]) {
                if (i < left.length) {
                    output.push(left[i]);
                    ++i;
                } else {
                    output.push(right[j]);
                    ++j;
                }
            } else {
                if (j < right.length) {
                    output.push(right[j]);
                    ++j;
                } else {
                    output.push(left[i]);
                    ++i;
                }
            }
        }
        return output;
    }
}

function MergeSort(array) {
    if (array.length < 2) return array;
    var middle = Math.floor(array.length / 2);
    var left = array.slice(0, middle);
    var right = array.slice(middle, array.length);
    return Merge(MergeSort(left), MergeSort(right));
}

function Merge(left, right) {
    var output = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            output.push(left.shift());
        } else {
            output.push(right.shift());
        }
    }
    while (left.length) output.push(left.shift());
    while (right.length) output.push(right.shift());
    return output;
}