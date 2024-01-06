// create an empty object
let object1 = new Object(); // object creation by constructor
let object2 = {}; // object cration using object literals

// Create an object representing a person with properties like name, age, and address.
let person = {
  name: "John",
  age: 22,
  address: "NY street, America",
};

// Create a function that takes two objects as arguments and returns a new
// object with the combined properties of both.
let name = {
  fullname: "John Doe",
  age: 22,
};
let details = {
  address: "NY street, America",
};

let fullname1 = function (obj1, obj2) {
  return { ...obj1, ...obj2 };
};

let fullname2 = function (obj1, obj2) {
  return Object.assign({}, obj1, obj2);
};

// console.log(fullname2(name, details));

// Create an object representing a book with properties like title, author, and pages.
// Add a method to the object that calculates the reading time based on the number of pages
// and an estimated reading speed.

let book = {
  title: "Atomic Habits",
  author: "somebody",
  pages: 300,
  readingSpeed: function (pagesPerDay) {
    return `${this.pages / pagesPerDay} days read`;
  },
};

// console.log(book.readingSpeed(5));

// Write a function that checks if a given property exists in an object.

var object = {
  lap: "HP",
  processor: "i5",
  generation: "8th gen",
  memory: 8,
};

function check(obj, prop) {
  return prop in obj; // "in" operator is versatile in js. for checking the existence of a property in different data types (also works in string and arrays(only index))
}

console.log(check(object, "generation"));
console.log(check(object, "operatingSystem"));


