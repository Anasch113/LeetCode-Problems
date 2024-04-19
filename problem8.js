// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

// The function composition of an empty list of functions is the identity function f(x) = x.

// You may assume each function in the array accepts one integer as input and returns one integer as output.



var compose = function (functions) {

    return x => functions.reduceRight((acc, f) =>

        f(acc), x)

}


// Related Learning 

// Reduce Method 



// Basic Method
const array = [5, 2, 3, 4, 5]

const arrfun = array.reduce((acc, cur) => {
    return acc + cur
})






// With Directly passing function to reduce function
const array2 = [5, 2, 3, 4, 5]

var sum = function (a, b) {
    return a + b
}

const arrFun2 = array2.reduce(sum)



console.log(arrfun)
console.log(arrFun2)