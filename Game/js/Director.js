import { DataStore } from "./base/DataStore.js";
import { UpPencil } from "./runtime/UpPencil.js";
import { DownPencil } from "./runtime/DownPencil.js";
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

  // 判断小鸟是否撞击地板和铅笔
  check() {
    const birds = this.dataStore.get("birds");
    const land = this.dataStore.get("land");
    // 地板的撞击判断
    if (birds.birdsY[0] + birds.birdsHeight[0] >= land.y) {
      console.log("撞击地板");
      this.isGameOver = true;
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
      cancelAnimationFrame(this.dataStore.get("timer"));
      this.dataStore.destroy();
    }
  }
}
