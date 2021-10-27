import { Direction } from "../utils/direction";
import { Grid } from "../utils/grid";
import { Position } from "../utils/position";
import { ActorTypeSymbols, BaseActor, VeerDirection } from "./base_actor";

export class VeerActor extends BaseActor {
  veerDirection: VeerDirection;
  type: ActorTypeSymbols;

  constructor(
    veerDirection: VeerDirection,
    position: Position,
    direction: Direction
  ) {
    super(position, direction);
    this.veerDirection = veerDirection;
    this.type =
      veerDirection === VeerDirection.anticlockwise
        ? ActorTypeSymbols.veerLeftActor
        : ActorTypeSymbols.veerRightActor;
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
    return `${this.frame},${this.type},${this.position.row},${this.position.col}`;
  }
}
