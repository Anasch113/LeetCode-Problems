// 2635. Apply Transform Over Each Element in Array

// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map metho



var map = function (arr, fn) {

    let transformedArray = [];

    for (let i = 0; i < arr.length; i++) {

        transformedArray[i] = fn(arr[i], i)
    }
    console.log(transformedArray)
    return transformedArray;

}

map([1, 2, 3])