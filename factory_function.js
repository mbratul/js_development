/* 
    definition : In JavaScript, a factory function is a function that returns an object. It is a way of creating and returning objects in a more controlled and customizable manner. Factory functions are a form of design pattern that enables the creation of objects with specific properties and behaviors.
    
    https://www.geeksforgeeks.org/what-are-factory-functions-in-javascript/ 
 */

let person1 = {
  name: "Ratul",
  age: 40,
  sayHello() {
    console.log("hello " + this.name + " my age is " + this.age);
  },
};
person1.sayHello();
/* Factory Function Creation */
function createPerson(name, age) {
  return {
    name: name,
    age: age,
    sayHello() {
      console.log("hello " + this.name + " my age is " + this.age);
    },
  };
}
let person2 = createPerson("ratul", 40);
let person3 = createPerson("rana", 45);

console.log(person2, person3);
person2.sayHello();
person2.sayHello();

// Function creating new objects without use of 'new' keyword

function createRobot(name) {
  return {
    name: name,
    talk: function () {
      console.log("my name is " + this.name + " the robot");
    },
  };
}
//Create a robot with name Chitti
let robot1 = createRobot("runnner");

console.log(robot1);

let robot2 = createRobot("runner 2.0");

robot2.talk();
robot1.talk();

/* 
  Example 2: In this example, the Person factory function efficiently creates person objects by encapsulating the process of setting name and age properties. Each person object includes a greeting method for generating a customized message. Instances, such as person1 and person2, are easily created using the factory function, showcasing a concise and reusable approach to object creation in JavaScript.
 */

// Factory Function creating person

let Person = function (name, age) {
  // creating person object

  let person4 = {};

  // parameters as keys to this object
  person4.name = name;
  person4.age = age;

  // function to greet
  person4.greetings = function () {
    return "hello i am " + this.name + " my age is " + this.age;
  };
  return person4;
};

let person5 = Person("ratul", 40);
console.log(person5.greetings());

let person6 = Person("rana", 45);
console.log(person6.greetings());
