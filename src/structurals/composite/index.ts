import { DivisionCompound } from "./src/division-compound.component";
import { PlatoonCompound } from "./src/platoon-compound.component";
import { StormTrooperLeaf } from "./src/storm-trooper-leaf.component";
import { SquadCompound } from "./src/squad-compound.component";

export const startComposite = () => {
  const galaticEmpire = createGalaticEmpireDivision();

  const results = galaticEmpire.executeOrder("Order 66");
  console.log(results);
};

const createGalaticEmpireDivision = () => {
  const coreDivision = new DivisionCompound("Galatic Empire");

  const blueSoldier = new StormTrooperLeaf("Blue");
  const oliveGreenSoldier = new StormTrooperLeaf("Olive Green");
  const red = new StormTrooperLeaf("Red");

  const dSquad = new SquadCompound("D-Squad");
  dSquad.add(blueSoldier);
  dSquad.add(oliveGreenSoldier);
  dSquad.add(red);

  const marshall = new StormTrooperLeaf("Marshall");
  const bly = new StormTrooperLeaf("bly");
  const squad101stRegiment = new SquadCompound("101st Regiment");
  squad101stRegiment.add(marshall);
  squad101stRegiment.add(bly);

  const platoon = new PlatoonCompound("7th Legion");

  platoon.add(squad101stRegiment);
  platoon.add(dSquad);

  coreDivision.add(platoon);

  return coreDivision;
};
