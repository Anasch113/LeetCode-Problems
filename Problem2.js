// Problem No 2

// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).



var createCounter = (n)=>{

    let counter = n
    return function(){
        console.log(counter)
        counter++
    }

}

 const counter = createCounter(10)
  counter(10) // 10
 counter(11) // 11
  counter(12) // 12
 

  