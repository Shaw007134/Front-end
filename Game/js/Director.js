export class Director {
  constructor() {
    console.log("构造器初始化");
  }
  // 基于ES6实现案例模式
  static getInstance() {
    if (!Director.instance) {
      Director.instance = new Director();
    }
    return Director.instance;
  }
}
