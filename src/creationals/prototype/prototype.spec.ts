import { MadScientist } from "./src/mad-scientist";
import { Robot } from "./src/robot";

describe("Prototype", () => {
  it("Should check if a object was clone properly", () => {
    const robot1 = new Robot({
      owner: null,
      nickname: "C3PO",
      model: "CRPO",
      creationDate: new Date("1977-05-25")
    });

    robot1.owner = new MadScientist(robot1, "Unknow");

    const robot2 = robot1.clone();

    // Objects should not be the same memory reference
    expect(robot1).not.toBe(robot2);

    expect(robot1.nickname).toEqual(robot2.nickname);
    expect(robot1.model).toEqual(robot2.model);

    // Check creationDate instance
    expect(robot1.creationDate).not.toBe(robot2.creationDate);
    expect(robot1.creationDate).toEqual(robot2.creationDate);

    // Check owner instance
    expect(robot1.owner).not.toBe(robot2.owner);
    expect(robot1.owner).toEqual(robot2.owner);
  });
});
