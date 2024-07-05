// 2625. Flatten Deeply Nested Array

// Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

// A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.

// A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.

// Please solve it without the built-in Array.flat method.


// solution 

// Main concept : Recursion , Nested Arrays

var flat = function (arr, n) {

    if (n === 0) {
        return arr.slice()
    }
    let flatarr = []

    for (let i = 0; i < arr.length; i++) {

        if (Array.isArray(arr[i])) {
            const nested = flat(arr[i], n - 1)
            flatarr.push(...nested)
        }

        else {
            flatarr.push(arr[i])
        }

    }
    return flatarr

};