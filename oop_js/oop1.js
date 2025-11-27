class Person {
  constructor(fname, lname) {
    (this.fname = fname), (this.lname = lname);
  }
  getFullName() {
    return `${this.fname} ${this.lname}`;
  }
}
const ratul = new Person("muhtasim", "ratul");
console.log(ratul.getFullName());
const john = new Person("john", "doe");
console.log(john.getFullName());
