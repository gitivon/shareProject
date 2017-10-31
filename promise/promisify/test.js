import promisify from './promisify'
import fs from 'fs'
import path from 'path'

(async () => {
  try{
    // fs
    const files = await promisify(fs.readdir)(path.resolve(__dirname))
    console.log(files)

  } catch(e){
    console.error(e)
  }
})()
