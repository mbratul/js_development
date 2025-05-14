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
/* 
  Using this in a Method

  In the context of an object method in JavaScript, the this keyword refers to the object itself, allowing access to its properties and methods within the method’s scope. It facilitates interaction with the object’s data and behaviour, providing a way to access and manipulate its state.
 */

const person4 = {
  name: "John",
  age: 30,
  greet() {
    console.log(
      "hello, my name is " + this.name + " and i am " + this.age + " years old."
    );
  },
};
person4.greet();

/* 
  Using this in a Function
  In a JavaScript function, the behavior of the this keyword varies depending on how the function is invoked.
 */

function greet2() {
  console.log("hello my name is " + this.name);
}
let person5 = {
  name: "Amit",
  sayHello: greet2,
};

let another_person6 = {
  name: "jatin",
};
//Driver Code Starts {
greet2();
person5.sayHello();
greet2.call(another_person6);
//Driver Code Ends }

/* 
  Using this alone(Global Context)
  When used alone in JavaScript, outside of any specific context, the behavior of the this keyword depends on whether the code is running in strict mode or not.
 */
console.log(this);
