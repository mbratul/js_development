/*
    The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object. Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections), as well as the arguments object, generators produced by generator functions, and user-defined iterables.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
 */
let arr = ["Muhtasim", "Billah", "Ratul"];

for (let element of arr) {
  console.log(element);
}
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let element of num) {
  if (element % 2 == 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

let str = "Ratul";

for (let element of str) {
  console.log(element);
}
