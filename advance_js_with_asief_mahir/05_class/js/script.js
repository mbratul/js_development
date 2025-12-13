"use strict";
{
  /** arrow function  */
  const add = (a, b) => {
    return a + b;
  };
  console.log(add(10, 20));
  /** arrow function parameter declear without curly braces  */
  const demo = (x) => {
    return x + 2;
  };
  console.log(demo(4));
}
{
  /**
   * optional chaining
   * question mark (?) after todos in console is the optional chaining
   * it's used for early check without breaking the application and facing error
   */
  const person = {
    fullname: "ratul",
    age: 40,
    address: {
      city: "Dhaka",
      country: "bangladesh",
    },
  };
  console.log(person?.address?.city);

  let todos = null;
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => {
      todos = data;
    });
  console.log(todos?.title);
}
{
  /**
   * template literals
   */
  let fname = "ratul";
  let somethink = `hello ${fname}`;
  console.log(somethink);
}
{
  /**
   * destructuring in Array
   */
  const arr = [1, 2, 3, 4, 5, 6];
  const [first, , , fourth] = arr;
  console.log(first, fourth);
  const lastVal = arr[arr.length - 1];
  console.log(lastVal);
}
{
  /**
   * destructuring in object
   */
  const demoObj = {
    fullname: "ratul",
    age: 40,
    email: "demo@demo.com",
  };
  const { fullname } = demoObj;
  const { age: myage } = demoObj; // use myage as alias of age for destructuring
  console.log(fullname, myage);
}
{
  /**
   * for of loop use for array value
   * iterate loop inside of an array
   */
  const array = [10, 20, 42, 15, 45];
  for (let element of array) {
    // console.log(element);
  }
}
{
  const array = [10, 20, 42, 15, 45];
  /**
   * for in loop use for array index
   * iterate loop inside of an array for
   */
  for (let key in array) {
    // console.log(key);
  }
  /** we can also use in object */
  const object = { a: 1, b: 2, c: 3 };
  for (const property in object) {
    console.log(`${property}: ${object[property]}`);
  }
}
{
  /**
   * async/await (it's a syntactic suger of promise)
   * behind the scene async/await use promise
   */
  async function getData() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
    // const { title } = await response.json(); //destructuring json
    // console.log(title);
  }
  getData();
}
{
  /**
   * object.is method
   * return true or false if two object value is matched
   */
  const a = 10;
  const b = 10;
  console.log(Object.is(a, b));
}

{
  /**
   * spread operator [use three dot ... is the syntax ]
   */
  const array1 = [20, 20, 45, 75, 68];
  const array2 = [...array1];
  console.log(array2);
  console.log(...array2); //it's display a string
}
{
  /**
   * set object lets you store unique value
   */
  const arr = [1, 5, 4, 15, 6, 4, 5, 6, 4, 5, 1, 4, 25, 6];
  const demoSet = new Set(arr);
  console.log(demoSet);
}
