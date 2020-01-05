# Factory


## Also know as:
Virtual Constructor

## Intent

Define an interface for creating an object, but let subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.

## Wikipedia

In class-based programming, the factory method pattern is a creational pattern that uses factory methods to deal with the problem of creating objects without having to specify the exact class of the object that will be created. This is done by creating objects by calling a factory method—either specified in an interface and implemented by child classes, or implemented in a base class and optionally overridden by derived classes—rather than by calling a constructor.

## In other words

It provides a way to delegate the instantiation logic to child classes.


## Aplicability


- a class can't anticipate the class of objects it must create
- a class wants its subclasses to specify the objects it creates
- classes delegate responsibility to one of several helper subclasses, and you want to localize the knowledge of which helper subclass is the delegate

## Example used

Pizza Store


## Simple factory x Factory method x Abstract factory

### Simple factory

Simple factory is an object that encapsulate the creation of another object.

```
var user = UserFactory.createUser();
```

And we can give params to this methods to increase the number of products they're able to return.

```
var admin = UserFactory.createUser('admin');
var customer = UserFactory.createUser('customer');
```

### Factory Method
Its a simple factory extension. 

Factory Method defines one method, createThing for instance, which is overriden by subclasses who decide what to return. The Factories and Products must conform to interfaces for clients to be able to use them.

In Head First Design Patterns a Factory Method pattern is used to allow a PizzaStore to define many subclasses such as ChicagoPizzaStore, CaliforniaPizzaStore, NewYorkPizzaStore. Each subclass overrides createPizza and returns its own particular style of pizza (ie: a ChicagoPizza or a CaliforniaPizza). The main take away is that there is only one method, createPizza, that does anything. By subclassing and overriding this method we can offer aditional flexibility beyond what's possible with the Simple Factory (Dodson, Rob, 2012) 

## Credits

- https://sourcemaking.com/design_patterns/factory_method
- https://github.com/diegopacheco/java-design-patterns