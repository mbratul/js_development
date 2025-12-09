let employee = function (name, age, salary) {
  this.name = name;
  this.age = age;
  this.salary = salary;
  this.getEmployeeInfo = function () {
    console.log(
      `Employee name is ${this.name} age is ${this.age} and salary is ${this.salary}`
    );
  };
};

let emp1 = new employee("ratul", 34, 40000);
let emp2 = new employee("muhtasim", 36, 48000);
// console.log(emp1);
emp1.getEmployeeInfo();

employee.prototype.getName = function () {
  console.log(`your name is ${this.name}`);
};
emp2.getName();
/* var employee = function(name, age, salary){
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.getEmployeeInfo = function(){
        console.log(`Employee name is ${this.name}`);
        console.log(`Employee age is ${this.age}`);
        console.log(`Employee salary is ${this.salary}`);
    }
} */

// employee.prototype.getName = function () {
//   console.log(`Your name is ${this.name}`);
// };

// var emp1 = new employee("Ali", 25, 30000);
// var emp2 = new employee("Kashif", 35, 70000);

// console.log(emp1);
// emp2.getEmployeeInfo();
// emp2.getName();
