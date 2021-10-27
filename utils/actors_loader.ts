import {
  ActorTypeSymbols,
  BaseActor,
  VeerDirection,
} from "../actors/base_actor";
import { LineActor } from "../actors/line_actor";
import { RandomActor } from "../actors/random_actor";
import { StillActor } from "../actors/still_actor";
import { VeerActor } from "../actors/veer_actor";
import fs from "fs";
import { Position } from "./position";

export class ActorsLoader {
  loadActors(filename: string): BaseActor[] {
    var lines = fs.readFileSync(filename, "utf-8").split("\n").filter(Boolean);
    return lines.map((e) => this.actorfromString(e));
  }

  actorfromString(line: string) {
    var components = line.split(",");
    var actor: BaseActor;

    switch (components[0].trim()) {
      case ActorTypeSymbols.lineActor:
        actor = new LineActor(
          new Position(parseInt(components[1]), parseInt(components[2])),
          parseInt(components[3])
        );
        break;
      case ActorTypeSymbols.stillActor:
        actor = new StillActor(
          new Position(parseInt(components[1]), parseInt(components[2]))
        );
        break;
      case ActorTypeSymbols.randomActor:
        actor = new RandomActor();
        break;
      case ActorTypeSymbols.veerLeftActor:
        actor = new VeerActor(
          VeerDirection.anticlockwise,
          new Position(parseInt(components[1]), parseInt(components[2])),
          parseInt(components[3])
        );
        break;
      case ActorTypeSymbols.veerRightActor:
        actor = new VeerActor(
          VeerDirection.clockwise,
          new Position(parseInt(components[1]), parseInt(components[2])),
          parseInt(components[3])
        );
        break;
      default:
        throw new Error(`Invalid character literal ${components[0]}`);
    }
    return actor;
  }
}
