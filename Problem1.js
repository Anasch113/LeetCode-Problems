// Problem No 1: Write a function createHelloWorld. It should return a new function that always returns "Hello World".

/**
 *
 */
// var createHelloWorld = function() {

//     return function(...args) {

//     }
// };


// Leetcode Solution
const createHelloWorld = () => {
    return function (...args) {
        return "Hello World"
    }

}


// Otherss
// const createHelloWorld = () => {
//     return function (...args) {
//         return "Hello World"
//     }

// }

console.log(createHelloWorld(1))

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */