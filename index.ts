import fs from "fs";
import { BaseActor, VeerDirection } from "./actors/base_actor";
import { LineActor } from "./actors/line_actor";
import { RandomActor } from "./actors/random_actor";
import { StillActor } from "./actors/still_actor";
import { VeerActor } from "./actors/veer_actor";
import { Grid, Position } from "./constants";
class Main {
  actorsFile = "actors_input.txt";
  grid = new Grid(10, 10);
  frames = 3;
  actors: BaseActor[] = [];

  loadActors(filename: string): BaseActor[] {
    var lines = fs.readFileSync(filename, "utf-8").split("\n").filter(Boolean);
    return lines.map((e) => this.actorfromString(e));
  }

  actorfromString(line: string) {
    var components = line.split(",");
    var actor: BaseActor;

    switch (components[0]) {
      case "L":
        actor = new LineActor(
          this.grid,
          new Position(parseInt(components[1]), parseInt(components[2])),
          parseInt(components[3])
        );
        break;
      case "S":
        actor = new StillActor(
          this.grid,
          new Position(parseInt(components[1]), parseInt(components[2]))
        );
        break;
      case "R":
        actor = new RandomActor(this.grid);
        break;
      case "VL":
        actor = new VeerActor(
          VeerDirection.anticlockwise,
          this.grid,
          new Position(parseInt(components[1]), parseInt(components[2])),
          parseInt(components[3])
        );
        break;
      case "VR":
        actor = new VeerActor(
          VeerDirection.clockwise,
          this.grid,
          new Position(parseInt(components[1]), parseInt(components[2])),
          parseInt(components[3])
        );
        break;
      default:
        actor = new RandomActor(this.grid);
    }
    return actor;
  }

  start() {
    this.actors = this.loadActors(this.actorsFile);

    for (let frame = 0; frame < this.frames; frame++) {
      //move every actor
      this.actors.forEach((e) => {
        e.move(frame);
        console.log(e.toString());
      });
    }
  }
}

const main = new Main();
main.start();
