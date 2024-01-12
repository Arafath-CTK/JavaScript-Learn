let myPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("1st one");
  }, 2000);
});

let myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("2nd one");
  }, 4000);
});

myPromise1
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

async function promiseLogging() {
  console.log("started");
  let first = await myPromise1;
  console.log(first);
  console.log("middle");
  let second = await myPromise2;
  console.log("ended");
  console.log(second);
}

promiseLogging();