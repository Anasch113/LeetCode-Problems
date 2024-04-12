// Problem No 3: 
// To Be Or Not To Be

// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".





var expect = function (val) {

    return {
        toBe: (val2) => {

            if (val === val2) {
                return true
            }
            console.log("Not Equal")
            // throw new Error("Not Equal")
            

        },
        notToBe: (val2) => {
            if (val === val2) {
                console.log(" Equal")
                // throw new Error("Equal")
            }
            else return true
        }
    }



};


 expect(5).toBe(5); // true
  expect(5).notToBe(5); // throws "Equal"
 