
// Code

// 2705. Compact Object


// Given an object or array obj, return a compact object.

// A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.

// You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.



// Solution :


var compactObject = function (obj) {

    if (obj === null) {
        return obj
    }

    if (typeof obj !== 'object') {
        return obj
    }

    if (Array.isArray(obj)) {
        return obj.filter(Boolean).map(compactObject)
    }

    const compacted = {}

    for (const key in obj) {
        let value = compactObject(obj[key])

        if (value) {
            compacted[key] = value
        }

    }

    return compacted;


};


// Main concepts :

// 1. Recursion
// for in loop
// objects and arrays