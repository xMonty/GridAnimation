import { Direction, Grid, Position } from "../constants";
import { BaseActor, VeerDirection } from "./base_actor";

export class VeerActor extends BaseActor {
  veerDirection: VeerDirection;
  name: string;

  constructor(
    veerDirection: VeerDirection,
    position: Position,
    direction: Direction
  ) {
    super(position, direction);
    this.veerDirection = veerDirection;
    this.name = veerDirection === VeerDirection.anticlockwise ? "VL" : "VR";
  }

  nextTurn = 0;
  turnCount = 1;

  move(frame: number, grid: Grid) {
    if (this.nextTurn === frame) {
      super.turn(this.veerDirection);
      this.turnCount++;
      this.nextTurn += this.turnCount;
    }
    super.move(frame, grid);
  }

  toString() {
    return `${this.frame},${this.name},${this.position.row},${this.position.col}`;
  }
}
