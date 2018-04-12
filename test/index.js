import { once } from "@gitivon/decorators";

class A {

  @once()
  async test() {
    console.log('exec');
    return this;
  }
}

const a = new A();
a.b = 1;
a.test();
// a.test();