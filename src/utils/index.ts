// Credits to Ross Harrison for most of the logic for generating valid boards
// https://www.rharriso.com/posts/generating-sudoku-boards-pt-1-structures/#rough-naive-algorithm

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
  neighbors: Neighbor[];

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

    // Replace wiyh array of unique neighbors, excluding self
    this.neighbors = uniqueNeighbors.filter(
      (el) => !arraysEqual(el, [this.x, this.y])
    );
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
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      const point = new Point({
        x,
        y,
      });
      cellPoints.push(point);
    }
  }

  fillCells(cellPoints);

  return cellPoints;
}

function fillCells(cells: Point[]): void {
  for (const cell of cells) {
    const neighborValues = new Set();

    // Get all unique values in neighbors
    for (const neighbor of cell.neighbors) {
      const neighborIdx = IX(...neighbor, 9);
      neighborValues.add(cells[neighborIdx].value);
    }

    const validValues = [];

    // Get set of valid values
    for (let i = 1; i < 10; i++) {
      if (!neighborValues.has(i)) validValues.push(i);
    }

    // Randomize choices
    [cell.value] = shuffleArray(validValues as []);
  }
}

// Credits to: https://stackoverflow.com/a/46545530/13530472
function shuffleArray(array: any[]): any[] {
  type sortValue = {
    value: any;
    sort: number;
  };

  const result: any[] = array
    .map((value: any): sortValue => ({ value, sort: Math.random() }))
    .sort((a: sortValue, b: sortValue): number => a.sort - b.sort)
    .map(({ value }): any => value);

  return result;
}

export { Point, generateInitialState, coords, IX, arraysEqual };
