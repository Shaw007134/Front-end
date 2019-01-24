import { ResourceLoader } from './js/base/ResourceLoader.js'
import { Director } from './js/Director.js'
import { BackGround } from './js/runtime/BackGround.js'
import { DataStore } from './js/base/DataStore.js'
import { Land } from './js/runtime/Land.js'
import { Birds } from './js/player/Birds.js'
import { StartButton } from './js/player/StartButton.js'
import { Score } from './js/player/Score.js'

export class Main {
  constructor() {
    this.canvas = document.getElementById('game_canvas')
    this.ctx = this.canvas.getContext('2d')
    this.dataStore = DataStore.getInstance()
    const loader = ResourceLoader.create()
    this.director = Director.getInstance()
    loader.onLoaded(map => this.onResourceFirstLoaded(map))
    // drawImage负责将位图资源进行剪裁缩放，并且放置到画布上，并进行渲染
  }
  // createBackgroundMusic() {
  //   const bgm = wx.createInnerAudioContext();
  //   bgm.autoplay = true;
  //   bgm.loop = true;
  //   bgm.src = "audios/bgm.mp3";
  // }
  onResourceFirstLoaded(map, audio) {
    // 需要长期保存的放到instance的原型链中，初始化进行一次
    this.dataStore.canvas = this.canvas
    this.dataStore.ctx = this.ctx
    this.dataStore.res = map
    this.createBackgroundMusic()
    // this.createBackgroundMusic()
    this.init()
  }
  init() {
    // es6中,class是作为function存在的，类的变量、方法就是原型链中方法和类
    this.director.isGameOver = false
    this.dataStore
      .put('background', BackGround)
      .put('land', Land)
      .put('pencils', [])
      .put('birds', Birds)
      .put('startButton', StartButton)
      .put('score', Score)
    this.registerEvent()
    // 游戏开始前创建第一组铅笔
    this.director.createPencil()

    this.director.run()
  }

  createBackgroundMusic() {
    this.bgm = new Audio()
    this.bgm.autoplay = true
    this.bgm.loop = true
    this.bgm.src = './audio/bgm.mp3'
  }

  registerEvent() {
    this.canvas.addEventListener('touchstart', e => {
      e.preventDefault()
      setTimeout(() => {
        this.bgm.play()
      }, 500)
      if (this.director.isGameOver) {
        console.log('游戏开始')
        this.init()
        // this.init()
      } else {
        this.director.birdsEvent()
      }
    })
  }
}
