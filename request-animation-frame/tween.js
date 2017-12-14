import Tween from './plugins/tween'

// 兼容处理 requestAnimationFrame
if (!('requestAnimationFrame' in window)) {
  console.info('requestAnimationFrame not support in your browser, use setTimeout.')
  requestAnimationFrame = function(fn) {
    setTimeout(fn, 17)
  }	
}

const raf = () => new Promise(resolve => requestAnimationFrame(resolve))

/*
 */
class GtTween {

  /*
  * b: beginning value（初始值）；
  * c: change in value（变化量）；
  * TweenFn: Tween 函数 ；
  */
  constructor (b, c, TweenFn = Tween.Quad.easeIn) {
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
        this.val = await raf() - this.start
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

const Animate = (b, c) => new GtTween(b, c)

export default Animate
export { Tween, Animate, GtTween }
