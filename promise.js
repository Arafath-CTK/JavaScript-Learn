const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("okeyy");
    }, 2000);
  });
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("okeyy2");
    }, 4000);
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