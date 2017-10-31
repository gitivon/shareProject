export const doSomething = callback => new Promise(resolve => {
  setTimeout(() => {
    callback && callback();
    resolve(); 
  }, 100);
})

export const doSomethingElse = () => {
  throw new Error('error in doSomethingElse');
}