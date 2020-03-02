import { CreationalPatternsEnum } from "./src/patterns.enum";
import { startAbstractFactory } from "./src/creationals/abstract-factory";
import { startBuilder } from "./src/creationals/builder";
import { startFactory } from "./src/creationals/factory-method";
import { startPrototype } from "./src/creationals/prototype";
import { startSingleton } from "./src/creationals/singleton";

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

console.log("Choose an option: ");
console.log(`
    1 - Abstract Factory;
    2 - Builder;
    3 - Factory;
    4 - Prototype;
    5 - Singleton;
`);
console.log("What pattern do you want to execute?");
rl.on("line", answer => {
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

  console.log("Bye Bye...");

  rl.close();
});
