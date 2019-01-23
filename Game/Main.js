import { ResourceLoader } from "./js/base/ResourceLoader.js";
import { Director } from "./js/Director.js";

export class Main {
  constructor() {
    this.canvas = document.getElementById("game_canvas");
    this.ctx = this.canvas.getContext("2d");
    const loader = ResourceLoader.create();
    loader.onLoaded(map => this.onResourceFirstLoaded(map));

    Director.getInstance();

    let image = new Image();
    image.src = "../res/background.png";
    image.onload = () => {
      this.ctx.drawImage(
        image,
        0,
        0,
        image.width,
        image.height,
        0,
        0,
        image.width,
        image.height
      );
    };
    // drawImage负责将位图资源进行剪裁缩放，并且放置到画布上，并进行渲染
  }
  onResourceFirstLoaded(map) {
    console.log(map);
  }
}
