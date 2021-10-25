import { Direction } from "readline";
import { Grid, Position } from "./../constants";
import { getRandomInt } from "./../utils";
import { BaseActor } from "./base_actor";

export class RandomActor extends BaseActor {
  constructor(grid: Grid) {
    super(
      grid,
      new Position(getRandomInt(0, grid.rows), getRandomInt(0, grid.columns)),
      0
    );
  }

  move(frame: number) {
    this.position = new Position(
      getRandomInt(0, this.grid.rows),
      getRandomInt(0, this.grid.columns)
    );
    return `${frame},R,${this.position.row},${this.position.col}`;
  }
}
