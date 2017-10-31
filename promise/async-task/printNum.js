
export const printNum = (num, callback) => new Promise(resolve => {
  setTimeout(() => {
    console.log(num)
    callback && callback()
    resolve()
  }, 1000)
})

export const arr = [1, 2, 3, 4];