export default class Point {
  constructor({ x = 0, y = 0, value = null, fixed = false }) {
    this.x = x;
    this.y = y;
    this.value_ = value;
    this.fixed = fixed;
  }

  set value(value) {
    if (this.fixed) return;

    this.value_ = value;
  }

  get value() {
    return this.value_;
  }
}
