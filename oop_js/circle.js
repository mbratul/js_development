class Circle {
  //   static PI = 3.14;
  #PI = 3.14; //private variable
  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    // const area = Math.PI * this.radius * this.radius;
    // const area = Circle.PI * this.radius * this.radius;
    const area = this.#PI * this.radius * this.radius;
    return area;
  }
}

const area1 = new Circle(5);
console.log(area1.getArea());
