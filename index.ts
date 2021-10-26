import fs from "fs";
import { BaseActor, VeerDirection } from "./actors/base_actor";
import { LineActor } from "./actors/line_actor";
import { RandomActor } from "./actors/random_actor";
import { StillActor } from "./actors/still_actor";
import { VeerActor } from "./actors/veer_actor";
import { ActorsLoader } from "./actors_loader";
import { Grid, Position } from "./constants";

class Canvas2d {
  actorsFile = "actors_input.txt";
  grid = new Grid(10, 10);
  frames = 3;
  actorsLoader = new ActorsLoader();
  actors: BaseActor[] = [];

  setup() {
    this.actors = this.actorsLoader.loadActors(this.actorsFile);
  }

  renderFrame(frame: number) {
    this.actors.forEach((e) => {
      //This is just match the example output
      //Somehow the random actor doesnt show up
      //in first frame in example output
      let str = e.toString();
      if (str.length > 0) {
        console.log(str);
      }
      e.move(frame, this.grid);
    });
  }

  start() {
    for (let frame = 0; frame < this.frames; frame++) {
      this.renderFrame(frame);
    }
  }
}

const canvas2d = new Canvas2d();
canvas2d.setup();
canvas2d.start();
