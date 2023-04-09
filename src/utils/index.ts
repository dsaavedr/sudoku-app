function IX(x: number, y: number, w: number): number {
  return y * w + x;
}

function coords(IX: number, W: number): [number, number] {
  return [IX % W, Math.floor(IX / W)];
}

type Neighbor = [x: number, y: number];

type PointParams = {
  x: number;
  y: number;
  value?: number;
  fixed?: boolean;
};

class Point {
  x: number;
  y: number;
  value?: number;
  readonly fixed: boolean;
  private neighbors: Neighbor[];

  constructor(obj: PointParams) {
    this.x = obj.x;
    this.y = obj.y;
    this.value = obj.value;
    this.fixed = obj.fixed || false;
    this.neighbors = [];
    this.generateNeighbors();
  }

  generateNeighbors(): void {
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

  uniqueNeighbors(): void {
    const uniqueNeighbors: Neighbor[] = [];
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

function arraysEqual(a: number[], b: number[]): boolean {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

function generateInitialState(): Point[] {
  // Generate set of sample data
  const cellPoints: Point[] = [];
  for (let x = 0; x < 9; x++) {
    for (let y = 0; y < 9; y++) {
      const point = new Point({
        x,
        y,
        value:
          Math.random() > 0.7 ? 1 + Math.floor(Math.random() * 9) : undefined,
      });
      cellPoints.push(point);
    }
  }
  return cellPoints;
}

export { Point, generateInitialState, coords, IX, arraysEqual };
