import { ComputerBuilderFunction, ComputerBuilderClass } from "./src/computer-builder"

export const startBuilder = () => {
    // Testing function builder (auto complete don't work)
    const computerWithoutSSD =
        ComputerBuilderFunction('Motherboard A', 'Sata 1gb', '16gb')
            .enableBluetoothFeature()
            .build();

    const computerWithSSD =
        ComputerBuilderFunction('Motherboard B', 'Sata 500gb', '8gb')
            .enableBluetoothFeature()
            .enableOffboardGraphFeature()
            .setSSD('Corsair', '128gb')
            .build();

    console.log('computerWithoutSSD', computerWithoutSSD);
    console.log('computerWithSSD', computerWithSSD);

    // Testing builder class
    const computerWithoutSSD2 =
        new ComputerBuilderClass('Motherboard A', 'Sata 1gb', '16gb')
            .enableBluetoothFeature()
            .build()

    const computerWithSSD2 =
        new ComputerBuilderClass('Motherboard B', 'Sata 500gb', '8gb')
            .enableBluetoothFeature()
            .enableOffboardGraphFeature()
            .setSSD('Corsair', '256gb')
            .build()

    console.log('computerWithoutSSD2', computerWithoutSSD2);
    console.log('computerWithSSD2', computerWithSSD2);
}
