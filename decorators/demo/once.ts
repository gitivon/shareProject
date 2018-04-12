import { once } from "../once";

class A {

  @once()
  public async demoMethod() {
    console.log('demoMethod is run');
    return this;
  }

}