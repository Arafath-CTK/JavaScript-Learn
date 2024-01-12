let array = [1, 2, 3, 4, 5];
let [first, second, third, ...others] = array; // the rest of the elements other than 1st 2nd and 3rd will be stored in a separate array with the rest operator.
// console.log(second, first, third);
// console.log(others);


let myObject = {
  name: "arafath",
  age: 22,
  city: "calicut",
  hobbies: {
    singing: "mappila, malayalam, bollywood",
    football: "germany, bayern"
  }
};

let { age, name, city, hobbies:{football}} = myObject; // the nested objects can be destructured like this
// console.log(city, age, name, football);

let myObject1 = {
  nothing: "here"
}
let {nothing = "default", something = "no name"} = myObject1 // here we can define a default value for the property, if it doesn't exist this default value will shown, otherwise the real value will ve returned.
// console.log(nothing, something);