import { ResourceLoader } from "./js/base/ResourceLoader.js";
import { Director } from "./js/Director.js";
import { BackGround } from "./js/runtime/BackGround.js";
import { DataStore } from "./js/base/DataStore.js";
import { Land } from "./js/runtime/Land.js";
import { Birds } from "./js/player/Birds.js";
import { StartButton } from "./js/player/StartButton.js";
import { Score } from "./js/player/Score.js";

export class Main {
  constructor() {
    this.canvas = document.getElementById("game_canvas");
    this.ctx = this.canvas.getContext("2d");
    this.dataStore = DataStore.getInstance();
    const loader = ResourceLoader.create();
    loader.onLoaded(map => this.onResourceFirstLoaded(map));

    this.director = Director.getInstance();

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
    // 需要长期保存的放到instance的原型链中，初始化进行一次
    this.dataStore.ctx = this.ctx;
    this.dataStore.res = map;
    this.init();
  }
  init() {
    // es6中,class是作为function存在的，类的变量、方法就是原型链中方法和类
    this.director.isGameOver = false;
    this.dataStore
      .put("background", BackGround)
      .put("land", Land)
      .put("pencils", []);
    // 游戏开始前创建第一组铅笔
    this.director.createPencil();
    this.director.run();
  }
}
