import { Position } from "../utils/position";
import { ActorTypeSymbols, BaseActor } from "./base_actor";

export class StillActor extends BaseActor {
  constructor(position: Position) {
    super(position, 0);
  }
  move(frame: number) {
    this.frame = frame;
  }

  toString() {
    return `${this.frame},${ActorTypeSymbols.stillActor},${this.position.row},${this.position.col}`;
  }
}
