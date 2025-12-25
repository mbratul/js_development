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
{
  /**
   * closure example
   */

  function add(a) {
    return function (b) {
      return a + b;
    };
  }
  let addTen = add(10);
  let addSeven = addTen(7);
  console.log(addSeven);

  function addnumber() {
    let counter = 0;
    function plus() {
      counter += 1;
    }
    plus();
    return counter;
  }
  console.log(addnumber());
  addnumber();
  addnumber();
  addnumber();

  var langFunc = function () {
    var langName = "JavaScript";
    // displayLangName is a inner function of langFunc
    function displayLangName() {
      console.log(langName);
    }
    return displayLangName;
  };

  langFunc()();
}
{
  /**
   * 
   *   Every closure has three scopes:

  Local Scope (Own scope)
  Outer Functions Scope
  Global Scope

  Here's a series of nested functions,  all of which have access to the outer functions' scope. In this context, 
  we can say that closures have access to all outer function scopes.

   */
  var e = 10;
  function sum(a) {
    return function (b) {
      return function (c) {
        // outer functions scope
        return function (d) {
          // local scope
          return a + b + c + d + e;
        };
      };
    };
  }

  console.log(sum(1)(2)(3)(4));
}
