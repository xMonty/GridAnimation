import { Grid } from "../utils/grid";
import { Position } from "../utils/position";
import { getRandomInt } from "../utils/utils";
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
    //This is to match the example output
    //where R doesnt come up in 0th frame
    if (this.position.col < 0 && this.position.row < 0) {
      return "";
    }
    return `${this.frame},R,${this.position.row},${this.position.col}`;
  }
}
