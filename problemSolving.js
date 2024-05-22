let array = [10, 8, 40, 0, 12, 32, 12, 1, 3, 66, 13];
let all = [];
for (let index = Math.min(...array); index <= Math.max(...array); index++) {
  if (!array.includes(index)) {
    all.push(index);
  }
}
console.log(all);