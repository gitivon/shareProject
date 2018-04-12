import child_process from 'child_process';

const child = child_process.fork('./child_process.js', [], {
  encoding: 'utf8'
});

child.send({
  
})