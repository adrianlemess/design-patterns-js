import { BaseComponent } from "./base-component";
import { SquadCompound } from "./squad-compound.component";

export class PlatoonCompound extends BaseComponent {
  protected children: SquadCompound[] = [];
  public name: string;

  constructor(name) {
    super();
    this.name = name;
  }

  public add(squad: SquadCompound) {
    this.children.push(squad);
    squad.setParent(this);
  }

  public remove(squad: SquadCompound) {
    const squadIndex = this.children.indexOf(squad);
    this.children.splice(squadIndex, 1);
    squad.setParent(null);
  }

  public isComposite(): boolean {
    return true;
  }

  public executeOrder(order: string): string {
    const results = [];
    for (const child of this.children) {
      results.push(child.executeOrder(order));
    }

    return `Platoon ${this.name}-(${results.join("\n")})`;
  }
}
