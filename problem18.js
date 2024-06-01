// Debounce  function

// 2627. Debounce
//  function fn and a time in milliseconds t, return a debounced version of that function.

// A debounced function is a function whose execution is delayed by t milliseconds and whose execution is cancelled if it is called again within that window of time. The debounced function should also receive the passed parameters.




var debounce = function (fn, t) {

    let timer

    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => fn(...args), t)

    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */