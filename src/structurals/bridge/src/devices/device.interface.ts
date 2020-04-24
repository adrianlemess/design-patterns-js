// The "implementation" interface declares methods common to all
// concrete implementation classes. It doesn't have to match the
// abstraction's interface. In fact, the two interfaces can be
// entirely different. Typically the implementation interface
// provides only primitive operations, while the abstraction
// defines higher-level operations based on those primitives.
export interface Device {
  volume: number;
  channel: number;

  isEnabled: () => boolean;
  enable: () => void;
  disable: () => void;
  setVolume: (volume: number) => void;
  setChannel: (channel: number) => void;
}
