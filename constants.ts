export class Position {
  row: number;
  col: number;
  constructor(row: number, col: number) {
    this.row = row;
    this.col = col;
  }
}

export enum Direction {
  up = 0,
  upRight = 1,
  right = 2,
  downRight = 3,
  down = 4,
  downLeft = 5,
  left = 6,
  leftUp = 7,
}

export function directonToString(direction: Direction) {
  switch (direction) {
    case Direction.up:
      return "up";
    case Direction.upRight:
      return "upRight";
    case Direction.right:
      return "right";
    case Direction.downRight:
      return "downRight";
    case Direction.down:
      return "down";
    case Direction.downLeft:
      return "downLeft";
    case Direction.left:
      return "left";
    case Direction.leftUp:
      return "leftUp";
  }
}

export class Grid {
  rows: number;
  columns: number;
  constructor(rows: number, columns: number) {
    this.rows = rows;
    this.columns = columns;
  }
}
