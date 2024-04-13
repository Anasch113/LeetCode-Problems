//Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.




var createCounter = function (init) {

    let currentCount = init
    return {
        increment: () => {
            return ++currentCount
        },
        decrement: () => {
            return --currentCount
        },
        reset: () => {
            return currentCount = init
        }
    }

};


const counter = createCounter(5)
counter.increment();
counter.reset();
counter.decrement();


console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.reset())
