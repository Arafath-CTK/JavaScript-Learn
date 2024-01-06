let a = {
  name: "arafath",
  age: 22,
  hobbies: ["singing", "playing", "travelling"],
  eateries: [{ soft: ["7up", "pepsi"] }, { hard: ["shawarma", "shawaya"] }],
  fun: function () {
    console.log(`${this.eateries[0].soft[0]}`);
  },
};

for (const key1 in a.eateries) {
 for (const key2 in a.eateries[key1]) {
  if (a.eateries[key1][key2].includes("shawarma")) {
    (a.eateries[key1][key2])[a.eateries[key1][key2].indexOf("shawarma")] = "biryani"
  }
 }
}

console.log(a.eateries);
