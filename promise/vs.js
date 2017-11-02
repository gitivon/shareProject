const async foo = () => {
  try{
    let data = await doSomething();
    // 正向流程
  }catch(error) {
    // 异常流程
  }
}


const foo = () => new Promise((resolve, reject) => {
  doSomething().then(data => {
    // 正向流程
  }).catch(error => {
    // 异常流程
  });
})