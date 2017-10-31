import { printNum, arr } from './printNum'

const task = (i) => {
  printNum(i, () => {
    if(i < arr.length){
      task(i+1)
    } else {
      console.log('end')
    }
  })
}
task(arr[0])