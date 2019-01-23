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
  }
}
