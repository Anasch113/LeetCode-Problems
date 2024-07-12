// 2695. Array Wrapper

// Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:

// When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
// When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].



// Main concept : Prototypes of javascript objects, Classes , Reduce function 


// Solution: 

var ArrayWrapper = function (nums) {
    this.array = nums
};


ArrayWrapper.prototype.valueOf = function () {
    return this.array.reduce((acc, cur) => acc + cur, 0)
}


ArrayWrapper.prototype.toString = function () {
    return "[" + this.array.join(",") + "]"
}

 