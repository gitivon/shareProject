// import { once, sleep } from "../decorators/src";
import { once, sleep } from "@gitivon/decorators";


const timeout = (t: number): Promise<void> => new Promise(r => setTimeout(r, t));

class A {
  public b?: number;

  @sleep(1000)
  @once()
  async test() {
    console.log('exec', this);
    await timeout(1000);
    return this;
  }
}

(async () => {
  const a = new A();
  a.b = 1;
  console.log('start');
  await a.test();
  console.log(21);
  await a.test();

  // console.log(a)

})()