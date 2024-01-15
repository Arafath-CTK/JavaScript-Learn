var array = [1, 2, 3, 4, 5];
var a = array.indexOf(3); // to get the index of a specified element in the array.
// console.log(a);

var c = array.find((num) => num % 2 === 0); // find method get the first element that satisfies the condition
// console.log(c);

var d = array.filter((num) => num % 2 === 0); // filter method get an array elements that satisfies the condition.
// console.log(d);

var array = ["a", "b", "c", "d", "e", "f"];
var a = array.slice(1, 5); // slice method get a subset of the array from start index to end index(end is not included)
// console.log(a);

array.push("g"); // adds new values to the end of the array. push method modifies the original array
// console.log(array);

var newArray = array.concat("h", "i"); // it will also adds new values to an array, but it creates a new array, the original array is not modified.
// console.log(array);
// console.log(newArray);

var array = [1, 2, 3, 4, 5, 6, 7];
var popped = array.pop(); // removes the last element from the array. no argument needed
// console.log(popped); // and returns the popped single element
// console.log(array); // original array is modified.

var shifted = array.shift(); // removes the first element from an array
// console.log(shifted); // returns the shifted element
// console.log(array);

array.splice(2, 2, 8, 9, 10); // deleted 2 elements from starting from the index 2 and added another 2 elements after the index given. here, ("start index", "number of elements to be deleted", "after the first 2 parametres all other passing values will be added to the array starting from the given start index"). the minimum requirment for performing this method is the start index. you can only delete, or delete and add (act as replace) and also only add by giving the delete count as 0.
// console.log(array);

array = [1, 2, 3, 4]; //i need to only add two elements(0,0) after the index 0 (after the index 0 means, starting from 1)
array.splice(1, 0, 0, 0);
// console.log(array);

array.splice(1, 2); // removed 2 elements starting from index 1
// console.log(array);

array.splice(1, 2, 0, 0); // deleted 2 elements starting from the index 1 and replaced with another 2 value
// console.log(array);

array = [1, 2, 3, 4];
//both map() and forEach() perform a particular operation on each element of an array,
// but the map() returns the result as a new array of corresponding elements.
// and the forEach() did not return as an array, it returns as a list of each result. and it also can't be assigned to a variable.
var mappedArray = array.map((e) => 2 * e);
// console.log(mappedArray);
// console.log(array);

// array.forEach((e) => console.log(e * 2));
// console.log(array);

array = ["a", "r", "a", "f", "a", "t", "h"];
array.sort(); //this makes the array sorted in alphabetical order,and also this method changes the original array
// console.log(array);
array.reverse(); // this just reverses the array elements.
// console.log(array); // here we get the result as the array is sorted in alphabetical descending order. because we have sorted the same array above.

array = [35, 48, 50, 18];
var [chemistry, physics, english, maths] = array; // destructuring of an array
// console.log(maths, physics, chemistry, english);

function sum(a, b, c) {
  //arguments to a function act as a array like object.
  console.log(arguments); // we can access the arguments as "arguments" key.
  console.log(arguments.length); // returns the length of elements
  console.log(arguments[1]); //since it acts like a array, we can elements with index values
  console.log(b);
  var arrayLike = arguments;
  var convertedArray1 = Array.from(arrayLike); // it will convert an array like object into an array.
  var convertedArray2 = [...arrayLike]; // this also converts an array like object into an array.
  console.log(convertedArray1);
  console.log(convertedArray2);
}
// sum(1,2,3)

array = [1, 2, 3, 4];
var mapped = array.map((currentValue, index, array) => currentValue * index);
// console.log(mapped);

// Use map() to double each element in an array of numbers.
array = [1, 2, 3, 4];
mapped = array.map((currentValue) => currentValue * 2);
// console.log(mapped);

// Convert all items in a string array to lowercase.
array = ["HELLO", "WORLD", "HOW", "ARE", "YOU"];
mapped = array.map((currentValue) => currentValue.toLowerCase());
// console.log(mapped);

// Extract the year from each object: [{ date: "2024-01-11" }, { date: "2023-12-25" }, { date: "2025-06-15" }] - Expected Result: [2024, 2023, 2025]
array = [
  { date: "2024-01-11" },
  { date: "2023-12-25" },
  { date: "2025-06-15" },
];
mapped = array.map((currentValue) => parseInt(currentValue.date.slice(0, 4)));
// console.log(mapped);

// Multiply each element by its index: [5, 10, 15, 20] - Expected Result: [0, 10, 30, 60]
array = [5, 10, 15, 20];
mapped = array.map((currentValue, index) => currentValue * index);
// console.log(mapped);

// Keep only even numbers: [1, 2, 3, 4, 5, 6, 7, 8] - Expected Result: [2, 4, 6, 8]
array = [1, 2, 3, 4, 5, 6, 7, 8];
mapped = array.filter((currentValue) => currentValue % 2 === 0);
// console.log(mapped);

// Add '%' to numbers above 10: [5, 12, 8, 17, 2, 25] - Expected Result: [5, "12%", 8, "17%", 2, "25%"]
array = [5, 12, 8, 17, 2, 25];
mapped = array.map((currentValue) =>
  currentValue > 10 ? (currentValue = `${currentValue}%`) : currentValue
);
// console.log(mapped);

// Join elements with a comma: ["apple", "banana", "orange"] - Expected Result: "apple,banana,orange"
array = ["apple", "banana", "orange"];
mapped = array.join(",");
// console.log(mapped);

// Create "full name" property: [{ firstName: "John", lastName: "Doe" }, { firstName: "Jane", lastName: "Smith" }] -
// Expected Result: [{ firstName: "John", lastName: "Doe", fullName: "John Doe" }, { firstName: "Jane", lastName: "Smith", fullName: "Jane Smith" }]
array = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jane", lastName: "Smith" },
];
mapped = array.map((currentValue) =>
  Object.assign({}, currentValue, {
    fullName: currentValue.firstName + " " + currentValue.lastName,
  })
);
// console.log(mapped);

// Calculate area of rectangles: [{ width: 5, height: 10 }, { width: 8, height: 3 }] - Expected Result: [50, 24]
array = [
  { width: 5, height: 10 },
  { width: 8, height: 3 },
];
mapped = array.map((currentValue) => currentValue.width * currentValue.height);
// console.log(mapped);

// Get names and ages above 18: [{ name: "Alice", age: 25 }, { name: "Bob", age: 12 }, { name: "Charlie", age: 30 }] - Expected Result: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 30 }]
array = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 12 },
  { name: "Charlie", age: 30 },
];
var filtered = array.filter((currentValue) => currentValue.age > 18);
// console.log(mapped);

// Flatten the nested array [1, [2, 3], [4, 5, [6]], 7] into a single-dimensional array.\
arrayModel = [1, [2, 3], [4, 5, [6]], 7];
function flattenArray(array) {
  return array.map((currentValue) => {
    return Array.isArray(currentValue)
      ? flattenArray(currentValue)
      : currentValue;
  });
}
console.log(flattenArray(arrayModel));
