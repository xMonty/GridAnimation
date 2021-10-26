import { BaseActor, VeerDirection } from "./actors/base_actor";
import { LineActor } from "./actors/line_actor";
import { RandomActor } from "./actors/random_actor";
import { StillActor } from "./actors/still_actor";
import { VeerActor } from "./actors/veer_actor";
import { Position } from "./constants";
import fs from "fs";

export class ActorsLoader {
  loadActors(filename: string): BaseActor[] {
    var lines = fs.readFileSync(filename, "utf-8").split("\n").filter(Boolean);
    return lines.map((e) => this.actorfromString(e));
  }

  actorfromString(line: string) {
    var components = line.split(",");
    var actor: BaseActor;

    switch (components[0].trim()) {
      case "L":
        actor = new LineActor(
          new Position(parseInt(components[1]), parseInt(components[2])),
          parseInt(components[3])
        );
        break;
      case "S":
        actor = new StillActor(
          new Position(parseInt(components[1]), parseInt(components[2]))
        );
        break;
      case "R":
        actor = new RandomActor();
        break;
      case "VL":
        actor = new VeerActor(
          VeerDirection.anticlockwise,
          new Position(parseInt(components[1]), parseInt(components[2])),
          parseInt(components[3])
        );
        break;
      case "VR":
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
