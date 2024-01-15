// create an empty object
let object1 = new Object(); // object creation by constructor
let object2 = {}; // object cration using object literals

// Create an object representing a person with properties like name, age, and address.
let person = {
  name: "John",
  age: 22,
  address: "NY street, America",
};

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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

// -----------------------------------------------------------------------------------------------------------------------------------------------------------

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

// console.log(check(object, "generation"));
// console.log(check(object, "operatingSystem"));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Write a function that deep copies an object (creates a new object
// with the same structure and values, not just a reference).

var object = {
  name: "arafu",
  age: 22,
  gender: "male",
  hobbies: {
    singing: "bollywood, malayalam, tamil",
  },
};

let deepCopy = { ...object }; // Deep copies only the immediate members, nested objects are shallow copied.

object.age = 24;
object.hobbies.singing = "pop";

// console.log(object);
// console.log(deepCopy);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Write a function that removes all properties with a value of undefined from an object.

var object = {
  name: "Salman",
  age: 25,
  gender: undefined,
  hobbies: {
    loving: ["saimon", "febina(poocha)"],
    studying: undefined,
  },
};

function removeUndefined1(obj) {
  return Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => value !== undefined)
  );
}

function removeUndefined2(obj) {
  for (const key in obj) {
    if (obj[key] === undefined) {
      delete obj[key];
    }
  }
  return obj;
}

// console.log(removeUndefined2(object));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Write a function that calculates the sum of all numeric property values in an object.

var orders = {
  product: "Shoe",
  user1: 499,
  user2: 749,
  user3: 999,
  others: {
    one: 99,
    two: 49,
    three: 20,
  },
};

function summing(obj) {
  if (typeof obj !== "object" || obj === null) {
    return 0;
  }
  let sum = 0;
  for (const key in obj) {
    let value = obj[key];
    if (typeof value === "number") {
      sum += value;
    } else if (typeof value === "object" && value !== null) {
      sum += summing(value);
    }
  }
  return sum;
}

// console.log(summing(orders));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

var myObject = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

for (const key in myObject) {
  // basic syntax for "forIn"
  // console.log(key, myObject[key]);
}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let counting = function (myObject) {
  let count = 0;
  for (const key in myObject) {
    if (key) {
      count++;
    }
  }
  return count;
};

// console.log(counting(myObject));

let maxValue = function (obj) {
  let maxKey = null;
  let maxValue = -Infinity;

  for (const key in obj) {
    if (typeof obj[key] === "number" && obj[key] > maxValue) {
      maxKey = key;
      maxValue = obj[key];
    }
  }
  return maxKey;
};

// console.log(maxValue(myObject));

// Print all key-value pairs of an object in alphabetical order.
var myObject = {
  banana: 3,
  apple: 5,
  orange: 2,
  grape: 7,
};

function alphabeticalObject(obj) {
  var keys = Object.keys(obj).sort();
  keys.forEach((elem) => {
    console.log(elem);
  });
}

// alphabeticalObject(myObject)

// Count the total number of properties in an object (including nested ones).

var nestedObject = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main Street",
    city: "Anytown",
    country: "USA",
  },
  contact: {
    email: "john.doe@example.com",
    phone: {
      home: "555-1234",
      mobile: "555-5678",
    },
  },
};

function countProps(object) {
  let count = 0;
  for (const key in object) {
    if (key) {
      count++;
      if (typeof object[key] === "object" && object[key] !== null) {
        count += countProps(object[key]);
      }
    }
  }
  return count;
}

// console.log(countProps(nestedObject));

// Find the average value of all numeric properties in an object (including nested ones).

var sampleObject = {
  name: "John Doe",
  age: 25,
  grades: {
    math: 90,
    english: 85,
    science: 92,
  },
  attendance: {
    lectures: 20,
    labs: 18,
  },
  scores: [95, 88, 75],
  isActive: true,
};

function avgNumericValues(object) {
  var sum = 0;
  for (const key in object) {
    if (typeof object[key] === "number") {
      sum += object[key];
    } else if (typeof object[key] === "object" && object[key] !== null) {
      sum += avgNumericValues(object[key]);
    }
  }
  return sum;
}

// console.log(avgNumericValues(sampleObject));

// Create a new object containing only the even-numbered properties of another object.

var sampleObject = {
  name: "John Doe",
  age: 25,
  grades: {
    math: 90,
    english: 85,
    science: 92,
  },
  attendance: {
    lectures: 20,
    labs: 18,
  },
  scores: [95, 88, 75],
  isActive: true,
};

function evenProperties(object) {
  var newObject = {};
  var isEven = true;
  for (const key in object) {
    isEven = !isEven;
    if (isEven) {
      newObject[key] = object[key];
    }
  }
  return newObject;
}

// console.log(evenProperties(sampleObject));

// Modify all string values in an object to uppercase.

var sampleObject = {
  name: "John Doe",
  age: 25,
  city: "New York",
  details: {
    occupation: "Software Engineer",
    hobby: "Reading",
  },
  isActive: true,
};

function upperCasing(object) {
  for (const key in object) {
    if (typeof object[key] === "string") {
      object[key] = object[key].toUpperCase();
    } else if (typeof object[key] === "object" && object[key] !== null) {
      object[key] = upperCasing(object[key]);
    }
  }
  return object;
}

// console.log(upperCasing(sampleObject));

// Find the deepest nested property in an object.

var deepObject = {
  level1: {
    property1: "Value 1",
    property2: {
      level2: {
        property3: "Value 2",
        property4: {
          level3: {
            property5: "Deep Value",
          },
        },
      },
    },
  },
};

function findDeep(params) {}
