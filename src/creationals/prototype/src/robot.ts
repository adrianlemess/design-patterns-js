import { RobotPrototype } from "./robot-prototype";
import { MadScientist } from "./mad-scientist";

export class Robot implements RobotPrototype {
  owner: MadScientist;
  nickname: string;
  model: string;
  creationDate: Date;

  constructor(
    owner: MadScientist,
    nickname: string,
    model: string,
    creationDate: Date
  ) {
    this.owner = owner;
    this.nickname = nickname;
    this.model = model;
    this.creationDate = creationDate;
  }

  clone(): Robot {
    const robotCloned = { ...this };

    robotCloned.creationDate = new Date(this.creationDate.getTime());

    // Cloning an object that has a nested object with backreference
    // requires special treatment. After the cloning is completed, the
    // nested object should point to the cloned object, instead of the
    // original object. Spread operator can be handy for this case.
    robotCloned.owner = {
      ...this.owner,
      creation: { ...this }
    };

    return robotCloned;
  }
}
