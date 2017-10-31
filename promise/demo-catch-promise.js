const fn = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject(new Error('fn error'))
      resolve()
    }, 100)
  })
}

fn()
.then(e => {
  throw new Error('error line 11')
})
.catch(e => {
  console.log('catch an error', e)
})