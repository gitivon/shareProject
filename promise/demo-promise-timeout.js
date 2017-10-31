console.log('start')
Promise.timeout(2000).then(_ => {
  console.log('2000ms timeout')
})