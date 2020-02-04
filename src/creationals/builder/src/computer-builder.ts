import { SSD } from "./ssd.model";
import { ComponentsNotPassedException } from "./components-not-passed-exception";

class Computer {
  public motherBoard: string;
  public HDD: string;
  public RAM: string;
  public ssd: SSD;
  public isOffboardGraphicEnabled: boolean;
  public isBluetoothEnabled: boolean;
  constructor(data) {
    this.motherBoard = data.motherBoard;
    this.HDD = data.HDD;
    this.RAM = data.RAM;
    this.ssd = data.ssd;
    this.isOffboardGraphicEnabled = data.isOffboardGraphicEnabled;
    this.isBluetoothEnabled = data.isBluetoothEnabled;
  }

  toString() {
    return console.log(JSON.stringify(this));
  }
}

export const ComputerBuilderFunction = () => {
  let isOffboardGraphicEnabled: boolean = false;
  let isBluetoothEnabled: boolean = false;
  let ssd: SSD = null;
  let motherBoard = null;
  let HDD = null;
  let RAM = null;

  return {
    setMotherboard(value) {
      motherBoard = value;
      return this;
    },
    setHDD(value) {
      HDD = value;
      return this;
    },
    setRAM(value) {
      RAM = value;
      return this;
    },
    enableOffboardGraphFeature() {
      isOffboardGraphicEnabled = true;
      return this;
    },
    enableBluetoothFeature() {
      isBluetoothEnabled = true;
      return this;
    },
    setSSD(brand: string, size: string) {
      ssd = new SSD(brand, size);
      return this;
    },
    build() {
      if (!motherBoard) {
        throw new ComponentsNotPassedException(
          "The field motherboard is required!"
        );
      }

      if (!HDD) {
        throw new ComponentsNotPassedException("The field HDD is required!");
      }

      if (!RAM) {
        throw new ComponentsNotPassedException("The field RAM is required!");
      }

      return new Computer({
        motherBoard,
        HDD,
        RAM,
        ssd,
        isOffboardGraphicEnabled,
        isBluetoothEnabled
      });
    }
  };
};

export class ComputerBuilderClass {
  public motherBoard: string;
  public HDD: string;
  public RAM: string;
  public ssd: SSD;
  public isOffboardGraphicEnabled: boolean;
  public isBluetoothEnabled: boolean;

  constructor() {
    this.motherBoard = null;
    this.HDD = null;
    this.RAM = null;
    this.isBluetoothEnabled = false;
    this.isOffboardGraphicEnabled = false;
    this.ssd = null;
  }

  setMotherboard(motherBoard) {
    this.motherBoard = motherBoard;
    return this;
  }

  setHDD(HDD) {
    this.HDD = HDD;
    return this;
  }

  setRAM(RAM) {
    this.RAM = RAM;
    return this;
  }

  enableOffboardGraphFeature() {
    this.isOffboardGraphicEnabled = true;
    return this;
  }
  enableBluetoothFeature() {
    this.isBluetoothEnabled = true;
    return this;
  }
  setSSD(brand: string, size: string) {
    this.ssd = new SSD(brand, size);
    return this;
  }

  build(): Computer {
    if (!this.motherBoard) {
      throw new ComponentsNotPassedException(
        "The field motherboard is required!"
      );
    }

    if (!this.HDD) {
      throw new ComponentsNotPassedException("The field HDD is required!");
    }

    if (!this.RAM) {
      throw new ComponentsNotPassedException("The field RAM is required!");
    }
    return new Computer(this);
  }
}
