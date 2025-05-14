/* this keyword example is written here */

/* this keyword use in regular function */
let person = {
  greetings: "hello",
  names: ["ratul", "muhtasim", "billah", "rana", "nadim"],
  showName: function () {
    this.names.forEach(function (el) {
      console.log(this.greetings + " " + el);
    }, this);
    // console.log(this);
  },
};
person.showName();

/* this keyword use in arrow function */
let person2 = {
  greetings: "hello",
  names: ["ratul", "muhtasim", "billah", "rana", "nadim"],
  showName() {
    this.names.forEach((el) => {
      console.log(this.greetings + " " + el);
    });
    // console.log(this);
  },
};
person2.showName();
/* 
    where to use this keyword

    method >> Reference the current Object 
    function >> Reference the global or window object
 */
