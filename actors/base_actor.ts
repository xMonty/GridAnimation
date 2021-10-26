import { Direction, directonToString, Grid, Position } from "./../constants";

export enum VeerDirection {
  clockwise = 0,
  anticlockwise = 1,
}

export class BaseActor {
  grid: Grid;
  position: Position;
  direction: Direction;
  frame = 0;

  constructor(grid: Grid, position: Position, direction: Direction) {
    this.position = position;
    this.direction = direction;
    this.grid = grid;
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

  stepRight() {
    if (this.position.col < this.grid.columns - 1) {
      this.position.col++;
    }
  }

  stepDown() {
    if (this.position.row < this.grid.rows - 1) {
      this.position.row++;
    }
  }

  stepLeft() {
    if (this.position.col > 0) {
      this.position.col--;
    }
  }

  move(frame: number) {
    if (frame === 0) {
      return;
    }
    switch (this.direction) {
      case Direction.up:
        this.stepUp();
        break;
      case Direction.upRight:
        this.stepUp();
        this.stepRight();
        break;
      case Direction.right:
        this.stepRight();
        break;
      case Direction.downRight:
        this.stepDown();
        this.stepRight();
        break;
      case Direction.down:
        this.stepDown();
        break;
      case Direction.downLeft:
        this.stepLeft();
        this.stepDown();
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
