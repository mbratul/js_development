"use strict";
{
  let firstName = "muhtasim";
  let middleName = "billah";
  let lastName = "ratul";

  let fullName = firstName + middleName + lastName;
  console.log(fullName);

  var myName = "ratul";
  // console.log(window.myName); // global scope do not use
  // console.log(window.firstName); // functional scope that's why can not find out the window object

  const me = {
    fullName: "ratul",
    age: 30,
  };
  const friend = me;
  friend.age = 27;
  console.log(`Friend ${friend.age}`);
  console.log(`Me ${me.age}`);
  /** call stack example */
  function addition(a) {
    return a + multiply(10);
  }
  function multiply(b) {
    const c = 20;
    return c * b;
  }
  const value = addition(10);
  console.log(value);

  /** closure example */
  function something() {
    let a = 10;
    let arr = [1, 2];
    return function (b) {
      return a * b * arr[1];
    };
  }
  const result = something();
  const finalResult = result(100);
  console.log(finalResult);
  console.dir(result);
  // console.log(something());
}
