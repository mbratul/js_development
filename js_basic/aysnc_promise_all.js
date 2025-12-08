// all promise
const promise1 = Promise.resolve("promise 1 resolved");

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("promise 2 resolved");
  }, 2000);
});
console.log("synchronous line");

/* Promise.all([promise1, promise2]).then((resolve) => {
  console.log(resolve);
}); */

//only the first resolved promise will be displayed not all promise.
Promise.race([promise1, promise2]).then((resolve) => {
  console.log(resolve);
});
