let x = "my name is javascript ";
let y = "and i'm a scripting language";

// length
console.log(x.length);

//slice
console.log(x.slice(3, 7));
console.log(x.slice(8));
console.log(x.slice(-10));
console.log(x.slice(-10, -6));

//substr
console.log(x.substr(3, 4));
console.log(x.substr(3));

//replace
console.log(x.replace("javascript", "ScriptJava"));

// upper & lowercase
console.log(x.toUpperCase());
console.log(x.toLowerCase());

//concat
console.log(x.concat(y));

//split converts string to array of each values
console.log(x.split(" "));
console.log(x.split(""));

console.log(parseFloat("133"));
