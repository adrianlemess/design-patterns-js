import { BaseComponent } from "./base-component";

export class StormTrooperLeaf extends BaseComponent {
  public name: string;
  constructor(name) {
    super();
    this.name = name;
  }

  executeOrder(order): string {
    return `Soldier ${this.name} received the order ${order}`;
  }
}
