import { DataStore } from "../base/DataStore.js";

export class Score {
  constructor() {
    this.ctx = DataStore.getInstance().ctx;
    this.scoreNumber = 0;
    // 控制加分频率
    this.isScore = true;
  }

  draw() {
    this.ctx.font = "25px Arial";
    this.ctx.fillStyle = "#ffcbeb";
    this.ctx.fillText(
      this.scoreNumber,
      DataStore.getInstance().canvas.width / 2,
      DataStore.getInstance().canvas.height / 18,
      1000
    );
    // 1000为限定最大大小
  }
}
