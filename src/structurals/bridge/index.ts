import { Tv } from "./src/devices/tv";
import { Radio } from "./src/devices/radio";
import { RemoteControl } from "./src/remote-control/remote-control";
import { RadioRemoteControl } from "./src/remote-control/radio-remote-control";

export const startBridge = () => {
  const tv = new Tv();

  const remoteTv = new RemoteControl(tv);
  remoteTv.togglePower();

  const radio = new Radio();
  const remoteRadio = new RadioRemoteControl(radio);

  remoteRadio.mute();
};
