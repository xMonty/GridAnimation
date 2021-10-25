import { Direction, Grid, Position } from "./../constants";

export class BaseActor {
  grid: Grid;
  position: Position;
  direction: Direction;

  constructor(grid: Grid, position: Position, direction: Direction) {
    this.position = position;
    this.direction = direction;
    this.grid = grid;
  }

  stepUp() {
    if (this.position.col < this.grid.columns - 1) {
      this.position.col++;
    }
  }

  stepUpRight() {
    if (this.position.col < this.grid.columns - 1) {
      this.position.col++;
    }
    if (this.position.row > 0) {
      this.position.row--;
    }
  }

  stepRight() {
    if (this.position.col < this.grid.columns - 1) {
      this.position.col++;
    }
  }

  stepDownRight() {
    if (this.position.col < this.grid.columns - 1) {
      this.position.col++;
    }
    if (this.position.row < this.grid.rows - 1) {
      this.position.row++;
    }
    console.log(this.position);
  }

  stepDown() {
    if (this.position.row < this.grid.rows - 1) {
      this.position.row++;
    }
  }

  stepDownLeft() {
    if (this.position.row < this.grid.rows - 1) {
      this.position.row++;
    }
    if (this.position.col > 0) {
      this.position.col--;
    }
  }

  stepLeft() {
    if (this.position.col > 0) {
      this.position.col--;
    }
  }

  stepLeftUp() {
    if (this.position.col > 0) {
      this.position.col--;
    }
    if (this.position.row > 0) {
      this.position.row--;
    }
  }

  move(frame: number) {
    switch (this.direction) {
      case Direction.up:
        console.log("Up");
        this.stepUp();
        break;
      case Direction.upRight:
        console.log("upRight");
        this.stepUpRight();
        break;
      case Direction.right:
        console.log("right");
        this.stepRight();
        break;
      case Direction.downRight:
        console.log("downRight");
        this.stepDownRight();
        break;
      case Direction.down:
        console.log("down");
        this.stepDown();
        break;
      case Direction.downLeft:
        console.log("downLeft");
        this.stepDownLeft();
        break;
      case Direction.left:
        console.log("left");
        this.stepLeft();
        break;
      case Direction.leftUp:
        console.log("leftUp");
        this.stepLeftUp();
        break;
    }
  }
}
