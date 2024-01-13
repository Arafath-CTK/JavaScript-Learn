let myPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 resolved");
  }, 2000);
});

let myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2 resolved");
  }, 4000);
});

async function promiseExecution() {
  console.log("started");
  let p1 = await myPromise1;
  console.log("got the p1");
  console.log(p1);
  console.log("p1 printed");

  let p2 = myPromise2;
  console.log("got the p2");
  console.log(p2);
  console.log("p2 printed");
}

promiseExecution();
