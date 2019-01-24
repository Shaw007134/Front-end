import { Sprite } from "../base/Sprite.js";
import { DataStore } from "../base/DataStore.js";
// 循环渲染三只小鸟，canvas其实是渲染图片的剪裁部分
export class Birds extends Sprite {
  constructor() {
    const image = Sprite.getImage("birds");
    super(
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
    // 用数组存储小鸟的三种状态, 小鸟的宽为34，上下边距为10，左右为9
    this.clippingX = [9, 9 + 34 + 18, 9 + 34 + 18 + 18];
    this.clippingY = [10, 10, 10];
    this.clippingWidth = [34, 34, 34];
    this.clippingHeight = [24, 24, 24];

    const birdX = DataStore.getInstance().canvas.width / 4;
    const birdY = DataStore.getInstance().canvas.height / 2;
    this.birdsX = [birdX, birdX, birdX];
    this.birdsY = [birdY, birdY, birdY];

    this.birdsWidth = this.clippingWidth;
    this.birdsHeight = this.clippingHeight;

    this.y = this.birdsY;
    this.index = 0;
    this.count = 0;
    this.time = 0;
  }
  draw() {
    // 切换三只小鸟的速度
    const speed = 0.2;
    this.count = this.count + speed;
    // 0,1,2
    if (this.count >= 2) {
      this.count = 0;
    }
    // 减速器的作用
    this.index = Math.floor(this.count);
    // 模拟重力加速度
    const g = 0.98 / 3.5;
    // 向上移动一点
    const offsetUp = 6;
    const offsetY = (g * this.time * this.time - offsetUp) / 2;
    for (let i = 0; i <= 2; i++) {
      this.birdsY[i] = this.y[i] + offsetY;
    }
    this.time = this.time + speed;
    super.draw(
      this.image,
      this.clippingX[this.index],
      this.clippingY[this.index],
      this.clippingWidth[this.index],
      this.clippingHeight[this.index],
      this.birdsX[this.index],
      this.birdsY[this.index],
      this.birdsWidth[this.index],
      this.birdsHeight[this.index]
    );
  }
}
