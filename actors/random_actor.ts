import { Direction } from "readline";
import { Grid, Position } from "./../constants";
import { getRandomInt } from "./../utils";
import { BaseActor } from "./base_actor";

export class RandomActor extends BaseActor {
  constructor() {
    super(new Position(-1, -1), 0);
  }

  move(frame: number, grid: Grid) {
    this.position = new Position(
      getRandomInt(0, grid.rows),
      getRandomInt(0, grid.columns)
    );
    this.frame = frame;
  }

  toString() {
    if (this.position.col < 0 && this.position.row < 0) {
      return "";
    }
    return `${this.frame},R,${this.position.row},${this.position.col}`;
  }
}
