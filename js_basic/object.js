let persons = {
  name: "Ratul",
  age: 40,
  location: {
    city: "Dhaka",
    zip: 1216,
  },
  sayHello: function () {
    console.log("hello world");
  },
};

console.log(persons);
console.log(persons.location); // you can call an object in this format

console.log(persons["location"]["city"]); // you can also call an object in this format

let full_name = persons.name;
console.log(full_name);

persons.sayHello(); // call a method in a object

persons.sayHello = function () {
  console.log("hello jupiter");
};
persons.sayHello();

persons.add = function (a, b) {
  return a + b;
};
console.log(persons.add(10, 20));
