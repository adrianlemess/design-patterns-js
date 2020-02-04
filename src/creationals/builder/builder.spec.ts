import {
  ComputerBuilderFunction,
  ComputerBuilderClass
} from "./src/computer-builder";

describe("Builder", () => {
  describe("Testing builder with function", () => {
    it("Testing a computer with no SSD", () => {
      const computerWithoutSSD = ComputerBuilderFunction()
        .setMotherboard("Motherboard A")
        .setHDD("1tb")
        .setRAM("16gb")
        .build();

      expect(computerWithoutSSD.motherBoard).toEqual("Motherboard A");
      expect(computerWithoutSSD.HDD).toEqual("1tb");
      expect(computerWithoutSSD.RAM).toEqual("16gb");
      expect(computerWithoutSSD.ssd).toBeNull();
    });

    it("Should be false by default bluetooth and offBoardGraphic fields", () => {
      const computerWithoutNoBluetoothAndOffboardGraphic = ComputerBuilderFunction()
        .setMotherboard("Motherboard A")
        .setHDD("1tb")
        .setRAM("16gb")
        .build();

      expect(computerWithoutNoBluetoothAndOffboardGraphic.motherBoard).toEqual(
        "Motherboard A"
      );
      expect(computerWithoutNoBluetoothAndOffboardGraphic.HDD).toEqual("1tb");
      expect(computerWithoutNoBluetoothAndOffboardGraphic.RAM).toEqual("16gb");
      expect(
        computerWithoutNoBluetoothAndOffboardGraphic.isBluetoothEnabled
      ).toBeFalsy();
      expect(
        computerWithoutNoBluetoothAndOffboardGraphic.isOffboardGraphicEnabled
      ).toBeFalsy();
    });

    it("Should enable bluetooth and offGraphBoard", () => {
      const computerWithNoBluetoothAndOffboardGraphic = ComputerBuilderFunction()
        .setMotherboard("Motherboard A")
        .setHDD("1tb")
        .setRAM("16gb")
        .enableBluetoothFeature()
        .enableOffboardGraphFeature()
        .build();

      expect(computerWithNoBluetoothAndOffboardGraphic.motherBoard).toEqual(
        "Motherboard A"
      );
      expect(computerWithNoBluetoothAndOffboardGraphic.HDD).toEqual("1tb");
      expect(computerWithNoBluetoothAndOffboardGraphic.RAM).toEqual("16gb");
      expect(
        computerWithNoBluetoothAndOffboardGraphic.isBluetoothEnabled
      ).toBeTruthy();
      expect(
        computerWithNoBluetoothAndOffboardGraphic.isOffboardGraphicEnabled
      ).toBeTruthy();
    });

    it("Should create a computer with SSD", () => {
      const computerWithSSD = ComputerBuilderFunction()
        .setMotherboard("Motherboard A")
        .setHDD("1tb")
        .setRAM("16gb")
        .setSSD("Corsair", "256gb")
        .build();

      expect(computerWithSSD.motherBoard).toEqual("Motherboard A");
      expect(computerWithSSD.HDD).toEqual("1tb");
      expect(computerWithSSD.RAM).toEqual("16gb");
      expect(computerWithSSD.ssd).toEqual({
        brand: "Corsair",
        size: "256gb"
      });
    });

    it("Should try to create a computer without motherboard and throw an error", () => {
      // If test the function call, should be wrapper inside anonymus function
      expect(() => ComputerBuilderFunction().build()).toThrowError(
        "The field motherboard is required"
      );
    });

    it("Should try to create a computer without HDD and throw an error", () => {
      expect(() =>
        ComputerBuilderFunction()
          .setMotherboard("Motherboard A")
          .build()
      ).toThrowError("The field HDD is required");
    });

    it("Should try to create a computer without RAM and throw an error", () => {
      expect(() =>
        ComputerBuilderFunction()
          .setMotherboard("Motherboard A")
          .setHDD("Seagate 200gb")
          .build()
      ).toThrowError("The field RAM is required");
    });
  });

  describe("Testing builder with class", () => {
    it("Testing a computer without SSD", () => {
      const computerWithoutSSD = new ComputerBuilderClass()
        .setMotherboard("Motherboard A")
        .setHDD("1tb")
        .setRAM("16gb")
        .build();

      expect(computerWithoutSSD.motherBoard).toEqual("Motherboard A");
      expect(computerWithoutSSD.HDD).toEqual("1tb");
      expect(computerWithoutSSD.RAM).toEqual("16gb");
      expect(computerWithoutSSD.ssd).toBeNull();
    });

    it("Should be false by default bluetooth and offBoardGraphic fields", () => {
      const computerWithoutNoBluetoothAndOffboardGraphic = new ComputerBuilderClass()
        .setMotherboard("Motherboard A")
        .setHDD("1tb")
        .setRAM("16gb")
        .build();

      expect(computerWithoutNoBluetoothAndOffboardGraphic.motherBoard).toEqual(
        "Motherboard A"
      );
      expect(computerWithoutNoBluetoothAndOffboardGraphic.HDD).toEqual("1tb");
      expect(computerWithoutNoBluetoothAndOffboardGraphic.RAM).toEqual("16gb");
      expect(
        computerWithoutNoBluetoothAndOffboardGraphic.isBluetoothEnabled
      ).toBeFalsy();
      expect(
        computerWithoutNoBluetoothAndOffboardGraphic.isOffboardGraphicEnabled
      ).toBeFalsy();
    });

    it("Should enable bluetooth and offGraphBoard", () => {
      const computerWithNoBluetoothAndOffboardGraphic = new ComputerBuilderClass()
        .setMotherboard("Motherboard A")
        .setHDD("1tb")
        .setRAM("16gb")
        .enableBluetoothFeature()
        .enableOffboardGraphFeature()
        .build();

      expect(computerWithNoBluetoothAndOffboardGraphic.motherBoard).toEqual(
        "Motherboard A"
      );
      expect(computerWithNoBluetoothAndOffboardGraphic.HDD).toEqual("1tb");
      expect(computerWithNoBluetoothAndOffboardGraphic.RAM).toEqual("16gb");
      expect(
        computerWithNoBluetoothAndOffboardGraphic.isBluetoothEnabled
      ).toBeTruthy();
      expect(
        computerWithNoBluetoothAndOffboardGraphic.isOffboardGraphicEnabled
      ).toBeTruthy();
    });

    it("Should create a computer with SSD", () => {
      const computerWithSSD = new ComputerBuilderClass()
        .setMotherboard("Motherboard A")
        .setHDD("1tb")
        .setRAM("16gb")
        .setSSD("Corsair", "256gb")
        .build();

      expect(computerWithSSD.motherBoard).toEqual("Motherboard A");
      expect(computerWithSSD.HDD).toEqual("1tb");
      expect(computerWithSSD.RAM).toEqual("16gb");
      expect(computerWithSSD.ssd).toEqual({
        brand: "Corsair",
        size: "256gb"
      });
    });

    it("Should try to create a computer without motherboard and throw an error", () => {
      // If test the function call, should be wrapper inside anonymus function
      expect(() => new ComputerBuilderClass().build()).toThrowError(
        "The field motherboard is required"
      );
    });

    it("Should try to create a computer without HDD and throw an error", () => {
      expect(() =>
        new ComputerBuilderClass().setMotherboard("Motherboard A").build()
      ).toThrowError("The field HDD is required");
    });

    it("Should try to create a computer without RAM and throw an error", () => {
      expect(() =>
        new ComputerBuilderClass()
          .setMotherboard("Motherboard A")
          .setHDD("Seagate 200gb")
          .build()
      ).toThrowError("The field RAM is required");
    });
  });
});
