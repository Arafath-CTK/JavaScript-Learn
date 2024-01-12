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
//both map() and forEach() perform a particular operation on each elenment of an array,
// but the map() returns the result as a new array of corresponding elements.
// and the forEach() did not return as an array, it returns as a list of each result. and it also can't be assigned to a variable.
var mappedArray = array.map((e) => 2 * e);
// console.log(mappedArray);
// console.log(array);

// array.forEach((e) => console.log(e * 2));
// console.log(array);

array = ["a", "r", "a", "f", "a", "t", "h"];
array.sort(); //this makes the array sorted in alphabetical order
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
let mapped = array.map((currentValue, index, array) => currentValue * index)
console.log(mapped);

