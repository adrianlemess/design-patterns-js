# Abstract Factory


## Also know as:
Kit

## Intent
Provide an interface for creating families of related or dependent objects without specifying their concrete classes.

## In other words
A factory of factories; a factory that groups the individual but related/dependent factories together without specifying their concrete classes.

## Aplicability

- a system should be independent of how its products are created, composed and represented
- a system should be configured with one of multiple families of products
- a family of related product objects is designed to be used together, and you need to enforce this constraint
- you want to provide a class library of products, and you want to reveal just their interfaces, not their implementations
- the lifetime of the dependency is conceptually shorter than the lifetime of the consumer.
- you need a run-time value to construct a particular dependency
- you want to decide which product to call from a family at runtime.
- you need to supply one or more parameters only known at run-time before you can resolve a dependency.

## Structure

AbstractFactory defines one factory method per product. Each factoryMethod encapsulates
the new operator and the concrete class, platform specifics and product classes.

## Example used

GUI operational system
- Usually an operational system has a GUI
- Each GUI has peculiarities (the menu on Window is different than Mac)
- Each Gui has a window, scrollbar and menu different from each other

## Adrian Notes

We can have several product families with this pattern. Example
Software that is meant to run on different platforms and encapsulate the dependencies it's platform. The client application can create an entire family of products.

## Credits

- https://sourcemaking.com/design_patterns/abstract_factory
- http://www.dsc.ufcg.edu.br/~jacques/cursos/map/html/pat/abstractfactory.htm
- https://github.com/diegopacheco/java-design-patterns