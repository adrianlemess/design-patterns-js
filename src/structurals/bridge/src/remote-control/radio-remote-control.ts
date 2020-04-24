import { RemoteControl } from "./remote-control";
import { Device } from "../devices/device.interface";

export class RadioRemoteControl extends RemoteControl {
  constructor(device: Device) {
    super(device);
  }

  mute() {
    this.device.setVolume(0);
  }
}
