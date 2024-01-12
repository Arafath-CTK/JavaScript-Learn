function createCounter() {
  let count = 0;
  function counter() {
    count++;
    return count;
  }
  return counter;
}

let counter1 = createCounter();
let counter2 = createCounter();

console.log(counter1());
console.log(counter1());
console.log(counter1());

console.log(counter2());
console.log(counter2());
console.log(counter2());
