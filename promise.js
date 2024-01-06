const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("okeyy");
    }, 5000);
  });
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("okeyy2");
    }, 10000);
  });
  
  async function pResolve() {
    console.log("Worlddd!!!");
    const x = await p;
    console.log("Hellooooo!!!!");
    console.log(x);
  
    const y = await p2;
    console.log("Hiiii");
    console.log(y);
  }
  
  pResolve();