import {
  doSomething,
  doSomethingElse
} from './fn'

try{
  doSomething(doSomethingElse)
}catch(e) {
  console.log('catch error: ', e.message)
}