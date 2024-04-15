// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

// The fn function takes one or two arguments:

// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

// Please solve it without the built-in Array.filter method.


// Solution 1


var filter = function (arr, fn) {
    let transferredArr = []

    for (i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            transferredArr.push(arr[i])
        }
    }
    return transferredArr
};



// Solution 2



var filter = function (arr, fun) {
    return arr.reduce((result, value, index) => {

        if (fun(value, index)) {
            result.push(value)
        }
        return result
    }, [])
}