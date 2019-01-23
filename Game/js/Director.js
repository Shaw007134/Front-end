import { DataStore } from "./base/DataStore.js";
// 统管所有的逻辑，进行运行，销毁，创建
export class Director {
  constructor() {
    this.dataStore = DataStore.getInstance();
  }
  // 基于ES6实现案例模式
  static getInstance() {
    if (!Director.instance) {
      Director.instance = new Director();
    }
    return Director.instance;
  }
  run() {
    this.dataStore.get("background").draw();
    this.dataStore.get("land").draw();
    // 与setTimeout与setTimeIterval等相比，其刷新率是由浏览器决定的
    // 每一次会在浏览器的帧率刷新之前执行，性能远比上述两者高
    let timer = requestAnimationFrame(() => {
      this.run();
    });
    this.dataStore.put("timer", timer);
    // cancelAnimationFrame(this.dataStore.get("timer"));
  }
}
