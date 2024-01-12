const person = {
  firstName: "John",
  lastName: "Doe",
};

function greet(greeting) {
    console.log(`${greeting} ${this.firstName} ${this.lastName}`);
}

greet.call(person, "Hello!!") // here the person variable represent the value for this. so in the greet function this refers to the person object.


