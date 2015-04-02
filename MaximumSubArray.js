var array = [13,-3,-25,20,-3,-16,-23,18,20,-7,12,-5,-22,15,-4,7];

function MaximumCrossingSubArray(array, low, middle, high) {
	var maxLow = Number.NEGATIVE_INFINITY,
		lowIndex = middle,
		lowSum = 0;
	for (var i = middle; i >= low; --i) {
		lowSum += array[i];
		if (maxLow < lowSum) {
			maxLow = lowSum;
			lowIndex = i;
		}
	}
	var maxHigh = Number.NEGATIVE_INFINITY,
		highIndex = middle + 1,
		highSum = 0;
	for (var j = highIndex; j <= high; ++j) {
		highSum += array[j];
		if (maxHigh < highSum) {
			maxHigh = highSum;
			highIndex = j;
		}
	}
	return {
		low: lowIndex,
		high: highIndex,
		sum: maxLow + maxHigh
	};
}

function MaximumSubArray(array, lowIndex, highIndex) {
	if (lowIndex == highIndex) {
		return {
			low: lowIndex,
			high: highIndex,
			sum: array[lowIndex]
		};
	} else {
		var middleIndex = Math.floor((lowIndex + highIndex) / 2),
			lowSum = MaximumSubArray(array, lowIndex, middleIndex),
			highSum = MaximumSubArray(array, middleIndex + 1, highIndex),
			crossSum = MaximumCrossingSubArray(array, lowIndex, middleIndex, highIndex);
		if (lowSum.sum >= crossSum.sum && lowSum.sum >= highSum.sum) {
			return lowSum;
		} else if (crossSum.sum >= lowSum.sum && crossSum.sum >= highSum.sum) {
			return crossSum;
		} else {
			return highSum;
		}
	}
}

console.log(MaximumSubArray(array, 0, array.length - 1));