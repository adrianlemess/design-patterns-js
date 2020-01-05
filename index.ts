import { PatternsEnum } from './src/patterns.enum';
import { startAbstractFactory } from './src/creationals/abstract-factory';
import { startBuilder } from './src/creationals/builder';
import { startFactory } from './src/creationals/factory-method';

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

console.log('Choose an option: ');
console.log(`
    1 - Abstract Factory;
    2 - Builder;
    3 - Factory;

`)
console.log('What pattern do you want to execute?');
rl.on('line', (answer) => {
    switch (answer) {
        case PatternsEnum.ABSTRACT_FACTORY:
            startAbstractFactory();
            break;
        case PatternsEnum.BUILDER:
            startBuilder();
            break;
        case PatternsEnum.FACTORY:
            startFactory();
            break;
        default:
            console.log('Option not mapped');
    }

    console.log('Bye Bye...')

    rl.close();
});
