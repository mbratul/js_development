/*  this keyword example is written here 

    Definition: The ‘this keyword’ in JavaScript refers to the object to which it belongs. Its value is determined by how a function is called, making it a dynamic reference. The ‘this’ keyword is a powerful and fundamental concept used to access properties and methods of an object, allowing for more flexible and reusable code.

    https://www.geeksforgeeks.org/javascript-this-keyword/
*/

/* this keyword use in regular function */
let person = {
  greetings: "hello",
  names: ["ratul", "muhtasim", "billah", "rana", "nadim"],
  showName: function () {
    this.names.forEach(function (el) {
      console.log(this.greetings + " " + el);
    }, this);
    // console.log(this);
  },
};
person.showName();

/* this keyword use in arrow function */
let person2 = {
  greetings: "hello",
  names: ["ratul", "muhtasim", "billah", "rana", "nadim"],
  showName() {
    this.names.forEach((el) => {
      console.log(this.greetings + " " + el);
    });
    // console.log(this);
  },
};
person2.showName();

const person3 = {
  name: "GeeksforGeeks",
  greet() {
    return ` welcome to, ${this.name}`;
  },
};
console.log(person3.greet());

/* 
    where to use this keyword

    method >> Reference the current Object 
    function >> Reference the global or window object
 */
