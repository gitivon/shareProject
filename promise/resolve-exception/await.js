import {
  doSomething,
  doSomethingElse
} from './fn'

(async () => {

  try{
    await doSomething();
    doSomethingElse();
  }catch(e) {
    console.log(e.message);
  }

})()