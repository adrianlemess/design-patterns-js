import {
  ComputerBuilderFunction,
  ComputerBuilderClass
} from "./src/computer-builder";

export const startBuilder = () => {
  // Testing function builder (auto complete don't work)
  const computerWithoutSSD = ComputerBuilderFunction()
    .setMotherboard("Motherboard A")
    .setHDD("Sata 750gb")
    .setRAM("16gb")
    .enableBluetoothFeature()
    .build();

  const computerWithSSD = ComputerBuilderFunction()
    .setMotherboard("Motherboard B")
    .setHDD("Sata 500gb")
    .setRAM("8gb")
    .enableBluetoothFeature()
    .enableOffboardGraphFeature()
    .setSSD("Corsair", "128gb")
    .build();

  console.log("computerWithoutSSD", computerWithoutSSD);
  console.log("computerWithSSD", computerWithSSD);

  // Testing builder class
  const computerWithoutSSD2 = new ComputerBuilderClass()
    .enableBluetoothFeature()
    .setMotherboard("Motherboard A")
    .setHDD("Sata 750gb")
    .setRAM("16gb")
    .build();

  const computerWithSSD2 = new ComputerBuilderClass()
    .setMotherboard("Motherboard B")
    .setHDD("Sata 500gb")
    .setRAM("8gb")
    .enableBluetoothFeature()
    .enableOffboardGraphFeature()
    .setSSD("Corsair", "256gb")
    .build();

  console.log("computerWithoutSSD2", computerWithoutSSD2);
  console.log("computerWithSSD2", computerWithSSD2);
};
