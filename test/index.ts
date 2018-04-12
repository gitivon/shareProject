import { once } from "../decorators/src";

class A {
  public b?: number;

  @once()
  async test() {
    console.log('exec', this);
    return this;
  }
}

(async () => {
  const a = new A();
  a.b = 1;
  await a.test();
  await a.test();

  console.log(a)

})()