import Shape from './Shape';

export default class Triangle extends Shape {
  constructor(color, base, height) {
    super(color);
    this.base = base;
    this.height = height;
  }

  getArea() {
    return (this.base * this.height) / 2;
  }

  toString() {
    return `Triangle [Color: ${this.color}, Base: ${this.base}, Height: ${this.height}, Area: ${this.getArea()}]`;
  }
}
