"use strict";
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
