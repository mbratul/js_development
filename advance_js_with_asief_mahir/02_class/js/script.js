"use strict";

{
  /** function referrence */
  const myFunction = function named() {
    console.log(`i am func 1`);
  };
  let myFunction2 = myFunction;

  myFunction2 = function () {
    console.log(`i am my func 2`);
  };
  console.log(myFunction, "myFunction");
  console.log(myFunction2, "myFunction2");

  myFunction();
  myFunction2();
}
{
  /** callback function */
  let numbersArray = [1, 2, 3, 4, 5, 6];
  const genericFunction = function (arr, callback) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
      newArray.push(callback(arr[i]));
    }
    return newArray;
  };
  const summation = genericFunction(numbersArray, function (element) {
    return element + 10;
  });
  const multiply = genericFunction(numbersArray, function (element) {
    return element * 10;
  });
  console.log(summation);
  console.log(multiply);
}
{
  /** asynchronous js */
}
