function add(a, b, c) {
  // this is normal function taking 3 values as arguments.
  return console.log(a + b + c);
}

function curryAdd(a) { // here we breakdown the function into several nested functions each taking only one arguments.
  return function (b) {
    return function (c) {
      console.log(a + b + c);
    };
  };
}

add(1, 2, 3);
curryAdd(1)(2)(3);

// Memoization
// memoization is a programming technique for optimizing the performance of functions by caching the result of expensinve function calls and return the cached result when the function call occures again with the same inputs.
