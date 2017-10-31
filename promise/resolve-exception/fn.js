export const doSomething = callback => new Promise(resolve => {
  setTimeout(() => {
    callback && callback();
    resolve(); 
  }, 100);
})

export const doSomethingElse = callback => new Promise(resolve => {
  throw new Error('error in doSomethingElse');
  resolve();
})