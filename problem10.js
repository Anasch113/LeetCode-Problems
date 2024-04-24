//Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.




var once = function (fn) {
    var cnt = 0
    return function (...args) {
        cnt++
        if (cnt === 1) return fn(...args)
    }

}