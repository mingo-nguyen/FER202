
export default class Shape {
    constructor(color) {
      this.color = color;
    }
  
    getArea() {
      throw new Error("getArea() must be implemented in subclass");
    }
  
    toString() {
      return `Shape with color: ${this.color}`;
    }
  }
  