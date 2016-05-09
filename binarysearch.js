#!/usr/bin/env node

function binarysearch(arr, data) {
    var upperbound = arr.length - 1;
    var lowerbound = 0;
    while (lowerbound <= upperbound) {
        var mid = Math.floor((upperbound + lowerbound) / 2);
        if (arr[mid] < data) {
            lowerbound = mid + 1;
        }
        else if (arr[mid] > data) {
            upperbound = mid - 1;
        }
        else {
            return mid;
        }
    }
    return -1;
}

test_list = [1, 3, 9, 11, 15, 19, 29];
test_val1 = 25;
test_val2 = 15;
console.log(binarysearch(test_list, test_val1));
console.log(binarysearch(test_list, test_val2));

