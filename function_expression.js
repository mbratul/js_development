/*
    Definition: Function Expression
A function expression in JavaScript is when a function is assigned to a variable. Unlike function declarations, function expressions can be anonymous and are not hoisted, meaning they can't be used before they're defined in code.
 */
let sayHello = function () {
  console.log("hello world");
};
console.log(sayHello);

sayHello();

let add = function (a, b) {
  console.log(a + b);
};
add(10, 20);
