const sleep = t => new Promise(rsv => setTimeout(rsv, t));

(async () => {
  console.log('start...');
  await sleep(2000);
  console.log('2000ms gone...');
  await sleep(5000);
  console.log('5000ms gone...');
})()