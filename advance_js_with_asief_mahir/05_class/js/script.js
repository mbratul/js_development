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
   * Set object lets you store unique value
   */
  const arr = [1, 5, 4, 15, 6, 4, 5, 6, 4, 5, 1, 4, 25, 6];
  const demoSet = new Set(arr);
  console.log(demoSet);
}
{
  /**
   * Map Object Data Type
   * we can set any kind of data in map object as a key value pair
   */
  const map = new Map();
  map.set(1, "11");
  map.set("a", "ratul");
  map.set([1, 2, 5, 4, 6], false);
  console.log(map);
}
{
  /**
   * Object.value()
   * give us an array of object values
   * */
  const obj1 = {
    fullname: "ratul",
    age: 40,
  };
  const arr = Object.values(obj1);
  console.log(Object.values(obj1));
  console.log(...arr);
}
{
  /**
   * Object.keys()
   * give us an array of object keys
   * */
  const obj1 = {
    fullname: "ratul",
    age: 40,
  };
  const arr = Object.keys(obj1);
  console.log(Object.keys(obj1));
  console.log(...arr);
}
{
  /**
   * Object.entries()
   * give us a nested array of objects
   * */
  const obj1 = {
    fullname: "ratul",
    age: 40,
  };
  const arr = Object.entries(obj1);
  console.log(Object.entries(obj1));
  console.log(...arr);
}
/**
 * Important Array Methods
 */
{
  /**forEach array method */
  console.log("forEach Array");
  const demoArr = [10, 20, 50, 45, 30, 40];
  demoArr.forEach((ele, index) => {
    console.log(ele, index);
  });
}
{
  /**map array method */
  console.log("map Array");
  const demoArr = [10, 20, 50, 45, 30, 40];
  const resultArr = demoArr.map((ele, index) => {
    return ele + 2;
  });
  console.log(resultArr);
}
{
  /**filter array method */
  console.log("filter Array");
  const demoArr = [10, 20, 50, 45, 30, 40];
  const filterArr = demoArr.filter((ele, index) => {
    return ele % 2 === 0;
  });
  console.log(filterArr);
  const todoArrObj = [
    {
      id: 1,
      title: "something",
      isCompleted: false,
    },
    {
      id: 2,
      title: "something2",
      isCompleted: true,
    },
    {
      id: 3,
      title: "something3",
      isCompleted: false,
    },
  ];
  const filterTodo = todoArrObj.filter((el) => {
    return el.isCompleted === true;
  });
  console.log(filterTodo);

  /**
   * find array method. this method find the the first matched result in an array
   * use object id to find out the matched result
   * */

  const findTodo = todoArrObj.find((element) => {
    return element.isCompleted === false;
  });
  console.log(findTodo);

  /**
   * findindex array method to find out the index of an array element
   */
  const todoFindIndex = todoArrObj.findIndex((element) => {
    return element.isCompleted === true;
  });
  console.log(todoFindIndex);
}
{
  /**
   * includes array, return boolean result of an array element
   */
  const stringArr = ["abc", 123, "---", "def"];
  console.log(stringArr.includes(123));
}
{
  const todoArrObj = [
    {
      id: 1,
      title: "something",
      isCompleted: false,
    },
    {
      id: 2,
      title: "something2",
      isCompleted: true,
    },
    {
      id: 3,
      title: "something3",
      isCompleted: false,
    },
  ];
  /**
   * every array method return boolean if all elements are matched
   */
  const everyResult = todoArrObj.every((el) => {
    return el.isCompleted === true;
  });
  console.log(everyResult);

  /** some array method return boolean if a single element is matched */
  const someResult = todoArrObj.some((el) => {
    return el.isCompleted === true;
  });
  console.log(someResult);
}
{
  /**
   * flat array method merge all nested array in a single array
   * we can define the depth of the array
   */
  const nested = [
    1,
    2,
    [4, 7, 8, [8, 7, 8, [(7, 8, 9)]]],
    4,
    5,
    [4, [6, 7, 9], 5],
    7,
    8,
    [4, 3],
  ];
  const flatArray = nested.flat(Infinity);
  console.log(flatArray);
}
{
  const todoArrObj = [
    {
      id: 1,
      title: "something",
      isCompleted: false,
    },
    {
      id: 2,
      title: "something2",
      isCompleted: true,
    },
    {
      id: 3,
      title: "something3",
      isCompleted: false,
    },
  ];
  /** splice array method remove any array element index wise  */
  const isSplice = todoArrObj.splice(0, 2);
  console.log(isSplice);
}
{
  /**
   * slice array method create a new array
   */
  const demoArr = [10, 20, 50, 45, 30, 40, 20, 10];
  const sliceArr = demoArr.slice(1, 3);
  console.log(sliceArr);

  /**
   * indexof an array method find the index of an array element
   */
  console.log(demoArr.indexOf(50));
  /**
   * lastIndexof an array method find the last index of an array element
   */
  console.log(demoArr.lastIndexOf(40));
}
{
  const demoArr = [10, 20, 50, 45, 30, 40, 20, 10];
  /**
   * a list of array method
   * 1. pop
   * 2. push
   * 3. shift
   * 4. unshift
   * 5. sort
   * 6. join
   * 7. concat
   * 8. Array.isArray
   */
  // sort array can sort an array in ascending and descending order
  const ascending = demoArr.sort((a, b) => {
    return a - b;
  });
  console.log(ascending);
  const descending = demoArr.sort((a, b) => {
    return b - a;
  });
  console.log(descending);

  // join array convert an array to a simple string
  const stringarr = demoArr.join(" ");
  console.log(stringarr);
}
{
  let myCar = "Lamborghini Huracan Evo";

  function changeCar() {
    let myCar = "Ferrari SF90 Stradale";
    console.log(myCar);
  }

  // let myCar = "Ford GT";
  console.log(myCar);
}
{
  let secondHome = "Canada";

  function toggleHome() {
    let secondHome = "Australia";
    secondHome = "USA";
  }

  toggleHome();

  console.log(secondHome);
}
{
  /**
   * hoisting
   */
  var hoistingIntro = "Hi there, I am a string one.";

  function hoistingFunc() {
    console.log(hoistingIntro);
    var hoistingIntro = "Hi there, I am a string two";
    console.log(hoistingIntro);
  }

  hoistingFunc();

  /** hoisting example */
  // function codeHoist() {
  //   let a = 10;
  //   let b = 50;
  // }
  // codeHoist();

  // console.log("value of a is ", a);
  // console.log("value of b is ", b);
  // sayHi();
  // console.log(sayHello);

  // function sayHi() {
  //   var sayHello = "Hi!";
  //   console.log(sayHello);
  // }

  // var sayHello = "Hello!";
}
