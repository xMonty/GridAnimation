import { Direction } from "readline";
import { Grid, Position } from "../constants";
import { BaseActor } from "./base_actor";

export class StillActor extends BaseActor {
  constructor(grid: Grid, position: Position) {
    super(grid, position, 0);
  }
  move(frame: number) {
    return `${frame},S,${this.position.row},${this.position.col}`;
  }
}
