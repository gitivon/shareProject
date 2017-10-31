import { printNum, arr } from './printNum'

arr.reduce((promise, val) => {
  return promise.then(() => {
    return printNum(val);
  })
}, Promise.resolve(1))