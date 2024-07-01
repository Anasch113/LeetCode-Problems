// 2724. Sort By

// Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArray must be sorted in ascending order by fn output.

// You may assume that fn will never duplicate numbers for a given array.



// solution 


// We are using traditional sort method of javascript with additional value compare 

var sort = (arr, fn) => {
    return arr.sort((a, b) => fn(a) - fn(b))
}

