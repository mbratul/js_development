/*
    The forEach() method of Array instances executes a provided function once for each array element.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

    for each array used only in array.
 */

let arr = ["Muhtasim", "Billah", "Ratul"];

console.log(arr[2]);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
/* === for each loop ==== */

arr.forEach(function (el) {
  console.log(el);
});

arr.forEach((el) => {
  console.log(el);
});

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

num.forEach(function (el) {
  if (el % 2 == 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
});

let str = "ratul";

for (let j = 0; j < str.length; j++) {
  console.log(str[j]);
}
