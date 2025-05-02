/*
    Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

    Broadly speaking, JavaScript has four kinds of functions:

    Regular function: can return anything; always runs to completion after invocation
    Generator function: returns a Generator object; can be paused and resumed with the yield operator
    Async function: returns a Promise; can be paused and resumed with the await operator
    Async generator function: returns an AsyncGenerator object; both the await and yield operators can be used  

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
 */

let a = 10;
let b = 20;

function add(x, y) {
  console.log(x + y);
}
add(a, b);
add(a, 50);

function say_hello() {
  console.log("hello world");
  let a = 30;
  console.log(a);
}
say_hello();
console.log(a);

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(5));
console.log(factorial(10));

/* IIFE function */
(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(1);
/* Function with many parameters */
// this function takes array as a parameter and sum up the numbers in the array
function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

let some_numbers = [1, 2, 3, 4, 5, 6];
//calling a function
console.log(sumArrayValues(some_numbers));

/* Arrow Function */
let area_of_circle = (radius) => {
  let area = Math.PI * radius * radius;
  return area;
};
console.log(area_of_circle(4));
