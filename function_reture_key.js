/*  
    Definition : Return
    The return keyword in JavaScript is used to specify the value that a function should output. When the interpreter reaches a return statement, the function's execution stops, and the specified value is returned to the point where the function was called. If no value is specified, the function returns undefined. 

 */

function add(a, b) {
  return a + b;
}

let value = add(20, 30);
console.log(value);

function multiply(a, b) {
  let result = a * b;
  return result;
}
console.log(multiply(5, 20));
