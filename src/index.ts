const wait = (msec: number) => new Promise(resolve => setTimeout(resolve, msec));

async function main() {
  await wait(1000);
  console.log('run');
}

main();
