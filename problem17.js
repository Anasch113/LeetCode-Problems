// 2622 : Cache with time limit



// Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

// The class has three public methods:

// set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

// get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

// count(): returns the count of un-expired keys.




class TimeLimitedCache {


    // Construnctor or Funtion to create the Map data structure

    constructor() {
        this.cache = new Map()
    }

    // Set Function to check key exists or not , If yes then return true and if not then expires it

    set(key, value, duration) {

        const alreadyExits = this.cache.get(key);

        if (alreadyExits) {

            clearTimeout(alreadyExits.timeoutId)
        }

        const timeoutId = setTimeout(() => {
            this.cache.delete(key)
        }, duration)

        this.cache.set(key, { value, timeoutId })

        return Boolean(alreadyExits)
    }
 
    // Get function that returns the value of key if key exists, if not exists then return -1
    get(key) {

        if (this.cache.has(key)) {
            return this.cache.get(key).value
        }
        return -1

    }

    // Count function that return the number of unexpired keys

    count() {
        return this.cache.size
    }
}