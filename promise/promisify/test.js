import promisify from './promisify'
import fs from 'fs'
import path from 'path'

const readdir = promisify(fs.readdir)

(async () => {
  try{
    // fs
    const files = await readdir(path.resolve(__dirname))
    console.log(files)

  } catch(e){
    console.error(e)
  }
})()
