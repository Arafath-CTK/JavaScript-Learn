const person = {
  firstName: "John",
  lastName: "Doe",
};

function greet(greeting) {
    console.log(`${greeting} ${this.firstName} ${this.lastName}`);
}

// greet.call(person, "Hello!!") // here the person variable represent the value for this. so in the greet function this refers to the person object.

// The bind method actually binds a fixed object to the  function. and store it as a new variable.
let greetPerson = greet.bind(person) //here with bind, we are binding the person object to the greet function and assigning that to a variable.
// greetPerson("Hola!!") // then we ara calling the greet function with the newly created variable, and also passing the argument to the greet function through the new function variable.


let array = [1, 2, 3, 4, 5, 6];

function sum(a, b, c, d, e) {
    console.log(a + b + c + d + e );
}

sum.apply(null, array) // here we are applying the array of values to the sum function, so the arguments for the sum function will be taken from the array,
// in this particular case, the array contains more than the number of values required for the function, so the function will take the first elements from the array.