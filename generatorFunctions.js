function* countNumbers() {
    let count = 1
    while(true) {
        yield count // this yeild keyword pauses the function and returns the current value of the count each time.
        count++;
    }
}

let counter = countNumbers()

console.log(counter.next().value); // the next() continues the execution of the function untill the next yield statement
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);

