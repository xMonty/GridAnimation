import { Direction, directonToString, Grid, Position } from "./../constants";

export enum VeerDirection {
  clockwise = 0,
  anticlockwise = 1,
}

export class BaseActor {
  position: Position;
  direction: Direction;
  frame = 0;

  constructor(position: Position, direction: Direction) {
    this.position = position;
    this.direction = direction;
  }

  turn(veerDirection: VeerDirection) {
    if (veerDirection === VeerDirection.anticlockwise) {
      if (this.direction > 0) {
        this.direction--;
      } else {
        this.direction = 7;
      }
    } else if (veerDirection == VeerDirection.clockwise) {
      if (this.direction < 7) {
        this.direction++;
      } else {
        this.direction = 0;
      }
    }
  }

  stepUp() {
    if (this.position.row > 0) {
      this.position.row--;
    }
  }

  stepRight(grid: Grid) {
    if (this.position.col < grid.columns - 1) {
      this.position.col++;
    }
  }

  stepDown(grid: Grid) {
    if (this.position.row < grid.rows - 1) {
      this.position.row++;
    }
  }

  stepLeft() {
    if (this.position.col > 0) {
      this.position.col--;
    }
  }

  move(frame: number, grid: Grid) {
    switch (this.direction) {
      case Direction.up:
        this.stepUp();
        break;
      case Direction.upRight:
        this.stepUp();
        this.stepRight(grid);
        break;
      case Direction.right:
        this.stepRight(grid);
        break;
      case Direction.downRight:
        this.stepDown(grid);
        this.stepRight(grid);
        break;
      case Direction.down:
        this.stepDown(grid);
        break;
      case Direction.downLeft:
        this.stepLeft();
        this.stepDown(grid);
        break;
      case Direction.left:
        this.stepLeft();
        break;
      case Direction.leftUp:
        this.stepLeft();
        this.stepUp();
        break;
    }
    this.frame = frame;
  }

  toString() {
    return "NOT_IMPL";
  }
}
