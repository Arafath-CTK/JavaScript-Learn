let myObject = {
  name: "john",
  age: 22,
  gender: "male",
  hobbies: [
    {
      football: ["cr7", "muller"],
    },
  ],
};

myObject.occupation = "full-stack developer";
// myObject.hobbies[0].football.push("kroos");

function changeProp(object) {
  for (const key in object) {
    if (typeof object[key] === "object") {
      changeProp(object[key]);
    } else if (key === "football" && Array.isArray(object[key])) {
        object[key].push("hummels")
    }
  }
}

changeProp(myObject);

console.log(myObject);
console.log(myObject.hobbies);
