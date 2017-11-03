const t1 = new Date();
const doSomething = () => new Promise(resolve => {
  setTimeout(() => {
    console.log('doSomething', new Date() - t1)
    resolve();
  }, 2000)
});
const doSomethingElse = () => new Promise(resolve => {
  setTimeout(() => {
    console.log('doSomethingElse', new Date() - t1)
    resolve();
  }, 3000)
});
console.log('start...');

// doSomething()
// .then(() => {
//   return doSomethingElse()
// }).then(() => console.log('done'))

// doSomething().then(() => {
//   doSomethingElse()
// }).then(() => console.log('done'))

// doSomething().then(doSomethingElse())
// .then(() => console.log('done'))

doSomething().then(doSomethingElse)
.then(() => console.log('done'))

// -----  change to async/await  ------
// (async () => {

//   // #1
//   await doSomething();
//   await doSomethingElse();
//   console.log('done')

//   // #2
//   await doSomething();
//   doSomethingElse();
//   console.log('done');

//   // #3
//   doSomethingElse();
//   await doSomething();
//   console.log('done');

//   // #4 == #1
//   await doSomething();
//   await doSomethingElse();
//   console.log('done');

// })()