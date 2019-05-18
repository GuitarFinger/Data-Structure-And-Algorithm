function binarySearch1(searchArr, searchVal) {
    let low = 0;
    let high = searchArr.length - 1;

    while (low <= high) {
        const mid = parseInt((high + low) / 2);

        if (searchVal < searchArr[mid]) {
            high = mid - 1;
        }
        else if (searchVal > searchArr[mid]) {
            low = mid + 1;
        }
        else {
            return mid;
        }
    }

    return -1;
}

function binarySearch2(searchArr, searchVal, low, high) {
    if (low > high) return -1;

    const mid = parseInt((high + low) / 2);

    if (searchVal < searchArr[mid]) {
        high = mid - 1;
        return binarySearch2(searchArr, searchVal, low, high);
    }
    else if (searchVal > searchArr[mid]) {
        low = mid + 1;
        return binarySearch2(searchArr, searchVal, low, high);
    }
    else {
        return mid;
    }
}

const searchIdx1 = binarySearch1([1, 3, 5, 7, 9], 3);
console.log("searchIdx:: ", searchIdx1);

const searchIdx2 = binarySearch2([1, 3, 5, 7, 9], 3, 0, 4);
console.log("searchIdx2:: ", searchIdx2);