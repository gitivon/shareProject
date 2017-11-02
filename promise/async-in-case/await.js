


// 多个 await 嵌套并带有条件判断的时候
(async () => {
  const data = await a()  // 首先需要等待一个异步执行结果
  data.b && await b()     // 然后要根据结果中的条件来决定是否需要等待第二个异步操作结果
  await c()               // 如果 data.b 是 false，那就不必等待 b() 的操作
})()


a().then(data => {
  new Promise(resolve =>{
    if(data.b) {
      b().then(resolve)
    } else {
      resolve()
    }
  }).then(c)
})


