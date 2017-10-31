import {
  doSomething,
  doSomethingElse
} from './fn'

doSomething()
  .then(doSomethingElse)
  .catch(e => {
    console.log(e.message);
  });