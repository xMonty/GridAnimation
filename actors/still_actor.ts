import { Direction } from "readline";
import { Grid, Position } from "../constants";
import { BaseActor } from "./base_actor";

export class StillActor extends BaseActor {
  constructor(position: Position) {
    super(position, 0);
  }
  move(frame: number) {
    this.frame = frame;
  }

  toString() {
    return `${this.frame},S,${this.position.row},${this.position.col}`;
  }
}
