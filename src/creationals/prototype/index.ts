import { Robot } from "./src/robot";
import { MadScientist } from "./src/mad-scientist";

export const startPrototype = () => {
  const robot1 = new Robot({
    owner: null,
    nickname: "C3PO",
    model: "CRPO",
    creationDate: new Date("1977-05-25")
  });
  
  robot1.owner = new MadScientist(robot1, "Unknow");

  const robot2 = robot1.clone();
  if (robot1.nickname === robot2.nickname) {
    console.log(
      "Nickname field values have been carried over to a clone. Yay!"
    );
  } else {
    console.log("Nickname field values have not been copied. Booo!");
  }
  if (robot1.creationDate === robot2.creationDate) {
    console.log("Date creation has not been cloned. Booo!");
  } else {
    console.log("Date creation has been cloned. Yay!");
  }

  if (robot1.owner === robot2.owner) {
    console.log("Component with back reference has not been cloned. Booo!");
  } else {
    console.log("Component with back reference has been cloned. Yay!");
  }

  if (robot1.owner.creation === robot2.owner.creation) {
    console.log(
      "Component with back reference is linked to original object. Booo!"
    );
  } else {
    console.log("Component with back reference is linked to the clone. Yay!");
  }

  console.log({
    robot1,
    robot2
  });
};
