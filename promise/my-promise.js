import { EventEmitter } from 'events'

// 简单实现一个自己的 Promise 类
class MyPromise {

  constructor (fn) {
    this['[[PromiseStatus]]'] = 'pending';
    this['[[PromiseValue]]'] = undefined;
    this['[[EventEmitter]]'] = new EventEmitter();
    // 立即执行回调函数事件
    fn.apply(this, [this._resolve.bind(this), this._reject.bind(this)])
    return this
  }

  then (fn1, fn2) {
    typeof fn1 === 'function' && this['[[EventEmitter]]'].on('resolve', fn1);
    typeof fn2 === 'function'  && this['[[EventEmitter]]'].on('reject', fn2);
    return this
  }

  catch (fn) {
    return this.then(null, fn)
  }

  _resolve (data) {
    this['[[PromiseStatus]]'] = 'resolved';
    this['[[EventEmitter]]'].emit('resolve', data)
  }

  _reject (data) {
    this['[[PromiseStatus]]'] = 'rejected';
    this['[[EventEmitter]]'].emit('reject', data)
  }

  static resolve (data) {
    return new MyPromise(resolve => {
      resolve(data)
    })
  }

}

const timeout = timer => new MyPromise((resolve, reject) => {
  throw new Error('报错啦')
  setTimeout(resolve, timer)
})

console.log('start')
timeout(2000).then(e => {
  console.log(`2000ms gone`);
})