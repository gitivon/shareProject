import { once } from "../once";

class A {

  @once()
  public async demoMethod() {
    console.log('demoMethod is run');
    return this;
  }

}

const a = new A();
a.demoMethod(); // console and cache result
a.demoMethod(); // will not console, but will get result

const b = new A();
b.demoMethod(); // console and cache result