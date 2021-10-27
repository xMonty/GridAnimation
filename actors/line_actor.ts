import { Direction } from "../utils/direction";
import { Grid } from "../utils/grid";
import { Position } from "../utils/position";
import { ActorTypeSymbols, BaseActor } from "./base_actor";

export class LineActor extends BaseActor {
  constructor(position: Position, direction: Direction) {
    super(position, direction);
  }
  move(frame: number, grid: Grid) {
    super.move(frame, grid);
  }

  toString() {
    return `${this.frame},${ActorTypeSymbols.lineActor},${this.position.row},${this.position.col}`;
  }
}
