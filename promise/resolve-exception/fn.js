export const doSomething = callback => new Promise(resolve => {
  setTimeout(() => {
    // throw new Error('error in doSomething')
    callback && callback();
    resolve(); 
  }, 100);
})

export const doSomethingElse = () => {
  throw new Error('error in doSomethingElse');
}