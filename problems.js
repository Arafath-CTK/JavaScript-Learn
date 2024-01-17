// Problem: Given an array of integers, write a function to find the sum of all positive numbers in the array.
// Example Data: [3, -1, 5, -2, 9]

var array = [3, -1, 5, -2, 9];
var result = array
  .filter((value) => value > 0)
  .reduce((acc, index) => acc + index, 0);
// console.log(result);

// Given an array, write a function to reverse its elements.
// Example: Input: [1, 2, 3, 4], Output: [4, 3, 2, 1]

array = [1, 2, 3, 4];
result = array.reverse();
// console.log(result);

// Given an array with duplicate elements, write a function to remove duplicates.
// Example: Input: [1, 2, 2, 3, 4, 4, 5], Output: [1, 2, 3, 4, 5]

array = [1, 2, 2, 3, 4, 4, 5];
result = [...new Set(array)];
// console.log(result);

// Given an object, access a nested property using object destructuring.
// Example: Input: { person: { name: 'John', age: 30 } }, Output: 'John'

var object = {
  Input: {
    person: {
      name: "John",
      age: 30,
    },
  },
};

var {
  Input: {
    person: { name },
  },
} = object;
// console.log(name);

// Write a function to check if a specific key exists in an object.
// Example: Input: { name: 'Alice', age: 25 }, Key: 'age', Output: true

modelObject = {
  name: "Alice",
  age: 25,
  hobbies: {
    dancing: ["classical", "western"],
    singing: ["kpop", "western", "spanish"],
    sports: {
      football: {
        international: ["germany", "india"],
        club: ["bayern", "real madrid"],
      },
    },
  },
};
result = Object.keys(object).includes("age");
// console.log(result);

function keyCheck(object, keyToCheck) {
  if (object && typeof object === "object") {
    if (keyToCheck in object) {
      return true;
    } else {
      for (const key in object) {
        if (keyCheck(object[key], keyToCheck)) {
          return true;
        }
      }
    }
  }
  return false;
}

// console.log(keyCheck(modelObject, "sports"));

// Write a function to reverse a given string.
// Example: Input: 'hello', Output: 'olleh'

function stringReverse(string) {
  return string.split("").reverse().join("");
}
// console.log(stringReverse("hello"));

// Write a function to count the number of vowels in a string.
// Example: Input: 'programming', Output: 3

function vowelCount(string) {
  var count = 0;
  string.split("").map((currentValue) => {
    if (
      currentValue === "a" ||
      currentValue === "e" ||
      currentValue === "i" ||
      currentValue === "o" ||
      currentValue === "u" ||
      currentValue === "A" ||
      currentValue === "E" ||
      currentValue === "I" ||
      currentValue === "O" ||
      currentValue === "U"
    ) {
      count++;
    }
  });
  return count;
}

// console.log(vowelCount("programming"));

// Use array destructuring to extract values from the given array.
// Example: Input: [1, 2, 3], Output: const [a, b, c] = [1, 2, 3];

array = [1, 2, 3];
var [a, b, c] = array;
// console.log(c, a, b);

// Use object destructuring to extract values from the given object.
// Example: Input: { name: 'Bob', age: 28 }, Output: const { name, age } = { name: 'Bob', age: 28 };

object = { name: "Bob", age: 28 };
var { age, name } = object;
// console.log(age, name);

// Explain the concept of closure and provide a simple example.
function createCounter() {
  var count = 0;
  function counter() {
    count++;
    return count;
  }
  return counter;
}

let counter1 = createCounter();
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());

// Write a function that can be called with either call or apply to find the maximum element in an array.
// Example: Input: [3, 1, 5, 2], Output: 5

function maxNumber() {
  array = Array.from(arguments);
  return Math.max(...array);
}

var array1 = [3, 1, 5, 2];
var max1 = maxNumber.call(null, ...array1);

var array2 = [3, 1, 5, 2, 9];
var max2 = maxNumber.apply(null, array2);

// console.log(max1, max2);

// Create a function using bind to set a specific context for this.
// Example: Create a bound function that always logs 'Hello, World!' with this set to { greeting: 'Hello' }.

var bindModel = {
  greeting: "Hello",
};

function greet(name) {
  return `${this.greeting}, ${name}!`;
}

var greet1 = greet.bind(bindModel);
// console.log(greet1("John"));

// write a generator function for a counter

function* countNumber() {

  let count = 1;
  while (true) {
    yield count;
    count++;
  }
}

var counter = countNumber();
// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);
