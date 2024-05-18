// Given a function fn, return a memoized version of that function.

// A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

// You can assume there are 3 possible input functions: sum, fib, and factorial.

// sum accepts two integers a and b and returns a + b. Assume that if a value has already been cached for the arguments (b, a) where a != b, it cannot be used for the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), two separate calls should be made.
// fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
// factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.


const memorize = (fn) => {

  const cache = {}

  return function (...args) {


    if (key in cache) {
      return cache[key]
    }

    const result = fn.apply(this, args)
    cache[key] = result
    return result


  }
}


const memoizedSum = memorize(function (a, b) {
  return a + b;
});

console.log(memoizedSum(2, 3)); // Output: Computing sum, 5
console.log(memoizedSum(2, 3)); // Output: 5








// Explanation of apply function 



//   In JavaScript, the apply() function is a method available on all functions. It allows you to call a function with a given this value and an array or array-like object of arguments.

// Here's how apply() works:

// Setting the context (this value): The first argument to apply() is the value that you want to set as the this value when the function is executed. This is particularly useful when you want to call a function in the context of a particular object.
// Passing arguments: The second argument to apply() is an array or array-like object containing the arguments that you want to pass to the function. The function will then be invoked with these arguments.
// Here's a basic example to illustrate the usage of apply():


function greet(name) {
  console.log(`Hello, ${name}!`);
}

const person = {
  name: 'John'
};

// Using apply to call the greet function with person object as context and passing arguments
greet.apply(person, ['Alice']);
// Output: Hello, Alice!
// In this example:

// We have a function greet() that takes a single argument name and logs a greeting message.
// We have an object person with a name property.
// We use apply() to invoke the greet() function with person object as the context (this value) and pass an array ['Alice'] as arguments.

// Another use case of apply() is when you want to use an array of arguments stored in a variable:


function sum(a, b) {
  return a + b;
}

const args = [2, 3];

const result2 = sum.apply(null, args);
console.log(result); // Output: 5
// In this example, we have an array args containing two numbers. We use apply() to pass the elements of the args array as arguments to the sum() function.

// Note: In modern JavaScript, the spread operator ... is often used instead of apply() for passing arrays as arguments. For example, you could achieve the same result as above with:

// javascript
// Copy code
const result = sum(...args);

function sum(a, b) {
  return a + b
}

const callSum = sum(1, 2)
console.log(callSum)
//adjisdhi


// for streak