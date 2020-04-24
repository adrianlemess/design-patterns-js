import { Device } from "../devices/device.interface";

export class RemoteControl {
  protected device: Device;

  constructor(device: Device) {
    this.device = device;
  }

  togglePower() {
    if (this.device.isEnabled()) {
      this.device.disable();
    } else {
      this.device.enable();
    }
  }

  volumeDown() {
    this.device.setVolume(this.device.volume - 10);
  }
  volumeUp() {
    this.device.setVolume(this.device.volume + 10);
  }
  channelDown() {
    this.device.setChannel(this.device.channel - 1);
  }
  channelUp() {
    this.device.setChannel(this.device.channel + 1);
  }
}
