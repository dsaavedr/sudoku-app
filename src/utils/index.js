function IX(x, y, w) {
  return y * w + x;
}

class Point {
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

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

function generateInitialState() {
  // Generate set of sample data
  const cellPoints = [];
  for (let x = 0; x < 9; x++) {
    for (let y = 0; y < 9; y++) {
      const point = new Point({
        x,
        y,
        value: Math.random() > 0.7 ? 1 + Math.floor(Math.random() * 9) : null,
      });
      cellPoints.push(point);
    }
  }
  return cellPoints;
}

const InitialState = generateInitialState();

export { Point, InitialState, IX, arraysEqual };
