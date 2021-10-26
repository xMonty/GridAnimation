import { Direction, Grid, Position } from "./../constants";
import { BaseActor } from "./base_actor";

export class LineActor extends BaseActor {
  constructor(grid: Grid, position: Position, direction: Direction) {
    super(grid, position, direction);
  }
  move(frame: number) {
    super.move(frame);
  }

  toString() {
    return `${this.frame},L,${this.position.row},${this.position.col}`;
  }
}
