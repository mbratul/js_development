class Person {
  constructor(fname, lname, age) {
    (this.fname = fname), (this.lname = lname);
    if (age <= 0) {
      throw new Error("Age is greater then 0");
    }
    this._age = age;
  }
  greet() {
    return `Hello i am ${this.fname} ${this.lname} and i am ${this._age} years old`;
  }
  getFullName() {
    return `${this.fname} ${this.lname}`;
  }
  /**
   * set a value using set method
   * @param {number}
   * @returns {number}
   */
  set age(value) {
    if (value <= 0) {
      throw new Error("Age must be greater then Zero");
    }
    this._age = value;
  }
  /**
   * get a value using get method
   * @returns {string}
   */
  get fullName() {
    return `${this.fname} ${this.lname}`;
  }
}

const rahim = new Person("rahim", "uddin", 25);
// rahim.age = 0;
console.log(rahim.greet());
console.log(rahim.fullName);
