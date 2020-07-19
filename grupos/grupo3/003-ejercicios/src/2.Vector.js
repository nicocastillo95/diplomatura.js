export class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  sumar(unVector) {
    return new Vector(this.x + unVector.getX(), this.y + unVector.getY());
  }
}
