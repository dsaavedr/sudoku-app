import { arraysEqual } from ".";

export default class Point {
  constructor({ x = 0, y = 0, value = null, fixed = false }) {
    this.x = x;
    this.y = y;
    this.value_ = value;
    this.fixed = fixed;
    this.neighbors = [];
    this.generateNeighbors();
  }

  set value(value) {
    if (this.fixed) return;

    this.value_ = value;
  }

  get value() {
    return this.value_;
  }

  generateNeighbors() {
    // Row and column
    for (let i = 0; i < 9; i++) {
      this.neighbors.push([i, this.y]);
      this.neighbors.push([this.x, i]);
    }

    // Block
    const xb = Math.floor(this.x / 3) * 3;
    const yb = Math.floor(this.y / 3) * 3;

    for (let i = xb; i < xb + 3; i++) {
      for (let j = yb; j < yb + 3; j++) {
        this.neighbors.push([i, j]);
      }
    }
    this.uniqueNeighbors();
  }

  uniqueNeighbors() {
    const uniqueNeighbors = [];
    for (const el of this.neighbors) {
      let unique = true;
      for (const uel of uniqueNeighbors) {
        if (arraysEqual(el, uel)) {
          unique = false;
          break;
        }
      }
      if (unique) {
        uniqueNeighbors.push(el);
      }
    }
    this.neighbors = uniqueNeighbors;
  }
}
