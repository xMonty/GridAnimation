import { Direction, Grid, Position } from "./../constants";
import { BaseActor } from "./base_actor";

export class LineActor extends BaseActor {
  constructor(position: Position, direction: Direction) {
    super(position, direction);
  }
  move(frame: number, grid: Grid) {
    super.move(frame, grid);
  }

  toString() {
    return `${this.frame},L,${this.position.row},${this.position.col}`;
  }
}
