import { Direction, Grid, Position } from "../constants";
import { BaseActor, VeerDirection } from "./base_actor";

export class VeerActor extends BaseActor {
  veerDirection: VeerDirection;
  name: string;

  constructor(
    veerDirection: VeerDirection,
    grid: Grid,
    position: Position,
    direction: Direction
  ) {
    super(grid, position, direction);
    this.veerDirection = veerDirection;
    this.name = veerDirection === VeerDirection.anticlockwise ? "VL" : "VR";
  }

  nextTurn = 0;
  turnCount = 1;

  move(frame: number) {
    if (frame === 0) {
      this.nextTurn++;
      return;
    }
    if (this.nextTurn === frame) {
      super.turn(this.veerDirection);
      this.turnCount++;
      this.nextTurn += this.turnCount;
    }
    super.move(frame);
  }

  toString() {
    return `${this.frame},${this.name},${this.position.row},${this.position.col}`;
  }
}
