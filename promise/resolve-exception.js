// callback
const doSomethingCallback = (callback) => {
  setTimeout(callback, 100);
}

const doSomethingElse = () => {
  throw new Error('error in doSomethingElse');
}

// try{
//   doSomethingCallback(doSomethingElse)
// }catch(e) {
//   console.log('catch error: ', e.message)
// }

// promise
const doSomethingPromise = () => new Promise(resolve => {
  setTimeout(resolve, 100);
});

// doSomethingPromise()
//   .then(doSomethingElse)
//   .catch(e => {
//     console.log(e.message);
//   });



// async-await
// (async () => {

//   try{
//     await doSomethingPromise();
//     doSomethingElse();
//   }catch(e) {
//     console.log(e.message);
//   }

// })()