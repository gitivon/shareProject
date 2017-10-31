const arr = [1, 2, 3]
const timeout = timer => {
  return new Promise(resolve => {
    setTimeout(resolve, timer)
  })
}

const log4timeout = i => {
  return timeout(1000).then(() => {
    return i
  })
}

(async () => {
  // arr.forEach(async i => {
  //   console.log(await log4timeout(i))
  // })

  for(let i of arr) {
    console.log(await log4timeout(i))
    // await timeout(1000)
    // console.log(i)
  }

})()

// http://www.bubuko.com/infodetail-1578593.html
// http://www.jianshu.com/p/063f7e490e9a