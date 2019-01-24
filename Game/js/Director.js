import { DataStore } from "./base/DataStore.js";
import { UpPencil } from "./runtime/UpPencil.js";
import { DownPencil } from "./runtime/DownPencil.js";
import { Score } from "./player/Score.js";
// 统管所有的逻辑，进行运行，销毁，创建
export class Director {
  // 基于ES6实现案例模式
  static getInstance() {
    if (!Director.instance) {
      Director.instance = new Director();
    }
    return Director.instance;
  }
  constructor() {
    this.dataStore = DataStore.getInstance();
    this.moveSpeed = 2;
  }

  // 思考用什么数据结构存储不断创建和销毁的铅笔 -- 数组
  createPencil() {
    const minTop = window.innerHeight / 8;
    const maxTop = window.innerHeight / 2;
    const top = minTop + Math.random() * (maxTop - minTop);
    this.dataStore.get("pencils").push(new UpPencil(top));
    this.dataStore.get("pencils").push(new DownPencil(top));
  }

  birdsEvent() {
    for (let i = 0; i <= 2; i++) {
      this.dataStore.get("birds").y[i] = this.dataStore.get("birds").birdsY[i];
    }
    this.dataStore.get("birds").time = 0;
  }

  // 判断是否和铅笔撞击
  static isStrike(bird, pencil) {
    let s = false;

    console.log(
      "1: " +
        (pencil.top < 0 &&
          bird.top < pencil.bottom - pencil.pin[0] &&
          bird.right > pencil.left)
    );

    console.log(
      "2: " +
        (pencil.top > 0 &&
          bird.bottom > pencil.top + pencil.pin[0] &&
          bird.right > pencil.left)
    );
    console.log(
      "3: " +
        (pencil.top < 0 &&
          pencil.bottom > bird.top > pencil.bottom - pencil.pin[0] &&
          isEdge(bird, pencil, "top"))
    );
    console.log(
      "4: " +
        (pencil.top > 0 &&
          pencil.top > bird.bottom > pencil.top - pencil.pin[0] &&
          isEdge(bird, pencil, "bottom"))
    );
    if (
      (pencil.top < 0 &&
        bird.top < pencil.bottom - pencil.pin[0] &&
        bird.right > pencil.left) ||
      (pencil.top > 0 &&
        bird.bottom > pencil.top + pencil.pin[0] &&
        bird.right > pencil.left) ||
      (pencil.bottom > bird.top > pencil.bottom - pencil.pin[0] &&
        isEdge(bird, pencil, "top")) ||
      (pencil.top > bird.bottom > pencil.top - pencil.pin[0] &&
        isEdge(bird, pencil, "bottom"))
    ) {
      s = true;
    }
    function isEdge(bird, pencil, pos) {
      const marginH =
        bird.right - pencil.left - (pencil.right - pencil.left) / 2;
      let marginV;
      if (pos === "top") {
        marginV = ((-bird.top + pencil.bottom) * pencil.pin[1]) / pencil.pin[0];
      } else {
        marginV = ((bird.bottom - pencil.top) * pencil.pin[1]) / pencil.pin[0];
      }
      console.log(marginH);
      console.log(marginV);
      if (marginH < 0) return bird.right > pencil.left + marginV;
      else return bird.left < pencil.right - marginV;
    }
    return s;
  }
  // 判断小鸟是否撞击地板和铅笔
  check() {
    const birds = this.dataStore.get("birds");
    const land = this.dataStore.get("land");
    const pencils = this.dataStore.get("pencils");
    const score = this.dataStore.get("score");
    // 地板的撞击判断
    if (birds.birdsY[0] + birds.birdsHeight[0] >= land.y) {
      console.log("撞击地板");
      this.isGameOver = true;
    }

    const birdsBorder = {
      top: birds.y[0],
      bottom: birds.birdsY[0] + birds.birdsHeight[0],
      left: birds.birdsX[0],
      right: birds.birdsX[0] + birds.birdsWidth[0]
    };

    const length = pencils.length;
    for (let i = 0; i < length; i++) {
      const pencil = pencils[i];
      const pencilBorder = {
        top: pencil.y,
        bottom: pencil.y + pencil.height,
        left: pencil.x,
        right: pencil.x + pencil.width,
        pin: [70, 25]
      };
      if (Director.isStrike(birdsBorder, pencilBorder)) {
        console.log(i);
        console.log("撞到铅笔了");
        this.isGameOver = true;
        return;
      }
    }

    // 加分器

    if (birds.birdsX[0] > pencils[0].x && score.isScore) {
      score.isScore = false;
      score.scoreNumber++;
    }
  }

  run() {
    this.check();
    if (!this.isGameOver) {
      this.dataStore.get("background").draw();

      const pencils = this.dataStore.get("pencils");
      if (pencils[0].x + pencils[0].width <= 0 && pencils.length === 4) {
        pencils.shift();
        pencils.shift();
        this.dataStore.get("score").isScore = true;
      }
      if (
        pencils[0].x <= (window.innerWidth - pencils[0].width) / 2 &&
        pencils.length === 2
      ) {
        this.createPencil();
      }
      this.dataStore.get("pencils").forEach(function(value) {
        value.draw();
      });

      this.dataStore.get("land").draw();
      this.dataStore.get("score").draw();
      this.dataStore.get("birds").draw();

      // 与setTimeout与setTimeIterval等相比，其刷新率是由浏览器决定的
      // 每一次会在浏览器的帧率刷新之前执行，性能远比上述两者高
      let timer = requestAnimationFrame(() => {
        this.run();
      });
      this.dataStore.put("timer", timer);
      // cancelAnimationFrame(this.dataStore.get("timer"));
    } else {
      console.log("游戏结束");
      this.dataStore.get("startButton").draw();
      cancelAnimationFrame(this.dataStore.get("timer"));
      this.dataStore.destroy();
    }
  }
}
