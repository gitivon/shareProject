import Tween from './plugins/tween'
import { frameTick } from './common'

/*
 */
class GtTween {

  /*
  * b: beginning value（初始值）；
  * c: change in value（变化量）；
  * TweenFn: Tween 函数 ；
  */
  constructor (b, c, TweenFn = Tween.Quad.easeInOut) {
    this.b = b
    this.c = c
    this.val = 0
    this.start = 0
    this.TweenFn = TweenFn
  }

  async _step (fn, done) {
    // 获取 tween 计算后的数值
    let v = this.TweenFn.apply(this, [
      this.val, this.b, this.c, this.d
    ])
    // 递归调用
    if(this.val < this.d){
      if(fn(v) === false){
        throw new Error('requestAnimationFrame is stop')
      } else {
        this.val = await frameTick() - this.start
        if(this.val - this.start <= this.d)
          await this._step(fn)
      }
    } else { // 终点结束来一帧保证最后数据准确
      fn(this.c)
    }
  }

  /*
  * fn: 每一帧操作回调
  * timer: 持续时间
  * TweenFn: duration（持续时间）。
  */
  async run (fn, timer) {
    this.start = performance.now()
    this.d = timer  // 60帧
    await this._step(fn)
  }

}

const Animate = (b, c, Tween) => new GtTween(b, c, Tween)

export default Animate
export { Tween, Animate, GtTween }
