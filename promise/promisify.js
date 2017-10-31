/**
 * 回调函数风格->promise风格
 */
export default (fn) => {
  if(typeof fn !== 'function') {
    throw new TypeError(`util.promisify: ${fn} is not function!`)
  }
  return (...args) => {
    let self = this
    return new Promise((resolve, reject) => {
      // 柯里化
      args.push((err, data) => {
        if(err) {
          reject(err)
        } else {
          resolve(data)
        }
      })
      fn.apply(self, args)
    })
  }
}