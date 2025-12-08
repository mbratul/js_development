/*  JavaScript Function() Constructor

    definition: The JavaScript Function() constructor is used to create new function objects dynamically. By using the Function() constructor with the new operator, developers can define functions on the fly, passing the function body as a string. This allows for greater flexibility in situations where functions need to be created based on runtime conditions or user input.

    One notable characteristic of functions created with the Function() constructor is that they have a global scope, meaning they are accessible from anywhere in the code.
    
    url: https://www.geeksforgeeks.org/javascript-function-constructor/

    url: https://www.w3schools.com/js/js_object_constructors.asp

    start here very soon

    youtube: https://www.youtube.com/watch?v=ZGzzMuEMVr0

    Math object is not a constructor function
 */
// it's a convention to use capital letter for create constructor function
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
}

let ratul = new Person("muhtasim", "ratul", 40);
console.log(ratul);

ratul.country = "Bangladesh";
console.log(ratul);

function sumNumber(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  return sum; // Return the computed sum
}

// Example usage:
console.log(sumNumber(5)); // Output: 15 (1+2+3+4+5)
console.log(sumNumber(4));
