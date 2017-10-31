import {
  doSomething,
  doSomethingElse
} from './fn'

try{
  doSomethingCallback(doSomethingElse)
}catch(e) {
  console.log('catch error: ', e.message)
}