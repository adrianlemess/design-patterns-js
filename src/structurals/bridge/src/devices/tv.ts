import { Device } from "./device.interface";

export class Tv implements Device {
  private status: boolean;
  channel: number;
  volume: number;

  constructor() {
    this.volume = 30;
    this.channel = 1;
  }

  disable() {
    this.status = false;
  }

  enable() {
    this.status = true;
  }

  isEnabled() {
    return this.status;
  }

  setChannel(channel: number) {
    this.channel = channel;
  }

  setVolume(volume: number) {
    this.volume = volume;
  }
}
