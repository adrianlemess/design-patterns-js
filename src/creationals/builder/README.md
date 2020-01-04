# Builder

## Intent
Separate the construction of a complex object from its representation so that the same construction process can create different representations.

## In other words
Its good when we have a creation of a class in parts, step by step.

Allows you to create different flavors of an object while avoiding constructor pollution. Useful when there could be several flavors of an object. Or when there are a lot of steps involved in creation of an object.

Having said that let me add a bit about what telescoping constructor anti-pattern is. At one point or the other we have all seen a constructor like below:

```
class Computer(
    public motherBoard: string;
    public HDD: string;
    public RAM: string;
    public ssd: SSD;
    public isOffboardGraphicEnabled: boolean;
    public isBluetoothEnabled: boolean;
) {}
```
As you can see the number of constructor parameters can quickly get out of hand and it might become difficult to understand the arrangement of parameters. Plus this parameter list could keep on growing if you would want to add more options in future. This is called telescoping constructor anti-pattern.

## Aplicability
Use the Builder pattern when

    - the algorithm for creating a complex object should be independent of the parts that make up the object and how they're assembled
    - the construction process must allow different representations for the object that's constructed
    - Fasfood request

## Structure

- I've made two implementations of builder:  using JavaScript function and another using class.
  
## Example used

- We can create a computer
- This computer has Motherboard, HDD and RAM
- This computer may have offboardGraphic and bluetooth enabled or disabled
- The computer may have or may not a SSD

## Credits

- https://sourcemaking.com/design_patterns/builder
- https://github.com/diegopacheco/java-design-patterns
- http://zetcode.com/javascript/builderpattern/