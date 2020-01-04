import { isRequired } from "./utils";
import { SSD } from "./ssd.model";

class Computer {
    public motherBoard: string;
    public HDD: string;
    public RAM: string;
    public ssd: SSD;
    public isOffboardGraphicEnabled: boolean;
    public isBluetoothEnabled: boolean;
    constructor(
        data
    ) {
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

export const ComputerBuilderFunction = (
    motherBoard: string = isRequired('motherboard'),
    HDD: string = isRequired('HDD'),
    RAM: string = isRequired('RAM')
) => {
    let isOffboardGraphicEnabled: boolean = false;
    let isBluetoothEnabled: boolean = false;
    let ssd: SSD = null;

    return {
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
            return new Computer({
                motherBoard,
                HDD,
                RAM,
                ssd,
                isOffboardGraphicEnabled,
                isBluetoothEnabled
            })
        }
    }
}

export class ComputerBuilderClass {
    public motherBoard: string;
    public HDD: string;
    public RAM: string;
    public ssd: SSD;
    public isOffboardGraphicEnabled: boolean;
    public isBluetoothEnabled: boolean;

    constructor(
        motherBoard: string = isRequired('motherboard'),
        HDD: string = isRequired('HDD'),
        RAM: string = isRequired('RAM')
    ) {
        this.motherBoard = motherBoard;
        this.HDD = HDD;
        this.RAM = RAM;
        this.isBluetoothEnabled = false;
        this.isOffboardGraphicEnabled = false;
        this.ssd = null;
    }

    enableOffboardGraphFeature() {
        this.isOffboardGraphicEnabled = true;
        return this;
    };
    enableBluetoothFeature() {
        this.isBluetoothEnabled = true;
        return this;
    };
    setSSD(brand: string, size: string) {
        this.ssd = new SSD(brand, size);
        return this;
    };

    build(): Computer {
        return new Computer(this);
    }
}