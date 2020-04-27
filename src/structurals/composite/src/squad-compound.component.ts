import { BaseComponent } from "./base-component";
import { StormTrooperLeaf } from "./storm-trooper-leaf.component";

export class SquadCompound extends BaseComponent {
  protected children: StormTrooperLeaf[] = [];
  public name: string;

  constructor(name) {
    super();
    this.name = name;
  }

  public add(soldier: StormTrooperLeaf) {
    this.children.push(soldier);
    soldier.setParent(this);
  }

  public remove(soldier: StormTrooperLeaf) {
    const soldierIndex = this.children.indexOf(soldier);
    this.children.splice(soldierIndex, 1);
    soldier.setParent(null);
  }

  public isComposite(): boolean {
    return true;
  }

  public executeOrder(order: string): string {
    const results = [];
    for (const child of this.children) {
      results.push(child.executeOrder(order));
    }

    return `Squad ${this.name}-(${results.join("\n")})`;
  }
}
