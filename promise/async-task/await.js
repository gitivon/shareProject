import { printNum, arr } from './printNum'

(async () => {
  for(let i of arr) {
    await printNum(i)
  }
})()