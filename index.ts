import {
  CreationalPatternsEnum,
  PatternsCategoriesEnum,
  StructurePatternsEnum
} from "./src/patterns.enum";
import { startAbstractFactory } from "./src/creationals/abstract-factory";
import { startBuilder } from "./src/creationals/builder";
import { startFactory } from "./src/creationals/factory-method";
import { startPrototype } from "./src/creationals/prototype";
import { startSingleton } from "./src/creationals/singleton";
import { startAdapter } from "./src/structurals/adapter";
import { startBridge } from "./src/structurals/bridge";
import { startComposite } from "./src/structurals/composite";
import { startDecorator } from "./src/structurals/decorator";
import { startFacade } from "./src/structurals/facade";
import { startFlyweight } from "./src/structurals/flyweight";
import { startProxy } from "./src/structurals/proxy";

const readline = require("readline");

let rl = null;

const startStructuralPatterns = () => {
  console.log(`
      1 - Adapter,
      2 - Bridge,
      3 - Composite,
      4 - Decorator,
      5 - Facade,
      6 - Flyweight,
      7 - Proxy
  `);
  console.log("structurals");
  rl.question("What Structural pattern do you want to execute?", answer => {
    switch (answer) {
      case StructurePatternsEnum.ADAPTER:
        startAdapter();
        break;
      case StructurePatternsEnum.BRIDGE:
        startBridge();
        break;
      case StructurePatternsEnum.COMPOSITE:
        startComposite();
        break;
      case StructurePatternsEnum.DECORATOR:
        startDecorator();
        break;
      case StructurePatternsEnum.FACADE:
        startFacade();
        break;
      case StructurePatternsEnum.FLYWEIGHT:
        startFlyweight();
        break;
      case StructurePatternsEnum.PROXY:
        startProxy();
        break;
    }
    rl.close();
    start();
  });
};

const startCreationalPatterns = () => {
  console.log(`
      1 - Abstract Factory;
      2 - Builder;
      3 - Factory;
      4 - Prototype;
      5 - Singleton;
  `);

  rl.question("What Creational pattern do you want to execute?", answer => {
    switch (answer) {
      case CreationalPatternsEnum.ABSTRACT_FACTORY:
        startAbstractFactory();
        break;
      case CreationalPatternsEnum.BUILDER:
        startBuilder();
        break;
      case CreationalPatternsEnum.FACTORY:
        startFactory();
        break;
      case CreationalPatternsEnum.PROTOTYPE:
        startPrototype();
        break;
      case CreationalPatternsEnum.SINGLETON:
        startSingleton();
        break;
      default:
        console.log("Option not mapped");
    }
    rl.close();
    start();
  });
};

export const start = () => {
  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });

  console.log(`
      1 - Creational patterns;
      2 - Structural patterns;
      `);

  rl.question("Choose an pattern category: ", answer => {
    switch (answer) {
      case PatternsCategoriesEnum.CREATIONALS:
        startCreationalPatterns();
        break;
      case PatternsCategoriesEnum.STRUCTURALS:
        startStructuralPatterns();
        break;
      case PatternsCategoriesEnum.BEHAVIORAL:
      // startBehavioralPatterns();
      // break;
      default:
        console.log("Option not mapped");
    }
  });
};

start();
