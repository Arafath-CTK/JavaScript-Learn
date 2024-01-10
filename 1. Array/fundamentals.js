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

var newArray = array.concat("h", "i") // it will also adds new values to an array, but it creates a new array, the original array is not modified.
// console.log(array);
// console.log(newArray);

var array = [1, 2, 3, 4, 5, 6, 7];
var popped = array.pop() // removes the last element from the array. no argument needed
// console.log(popped); // and returns the popped single element
// console.log(array); // original array is modified.

var shifted = array.shift() // removes the first element from an array
// console.log(shifted); // returns the shifted element
// console.log(array);



