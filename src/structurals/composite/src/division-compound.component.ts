import { BaseComponent } from "./base-component";
import { PlatoonCompound } from "./platoon-compound.component";

export class DivisionCompound extends BaseComponent {
  protected children: PlatoonCompound[] = [];
  public name: string;

  constructor(name) {
    super();
    this.name = name;
  }

  public add(platoon: PlatoonCompound) {
    this.children.push(platoon);
    platoon.setParent(this);
  }

  public remove(platoon: PlatoonCompound) {
    const platoonIndex = this.children.indexOf(platoon);
    this.children.splice(platoonIndex, 1);
    platoon.setParent(null);
  }

  public isComposite(): boolean {
    return true;
  }

  public executeOrder(order: string): string {
    const results = [];
    for (const child of this.children) {
      results.push(child.executeOrder(order));
    }

    return `Division ${this.name}-(${results.join("\n")})`;
  }
}
