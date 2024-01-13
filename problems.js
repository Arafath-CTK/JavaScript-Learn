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
console.log(result);
