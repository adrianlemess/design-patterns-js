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
-  Use the Factory Method when you don’t know beforehand the exact types and dependencies of the objects your code should work with.

## How to use



1. Make all products follow the same interface. This interface should declare methods that make sense in every product.

2. Add an empty factory method inside the creator class. The return type of the method should match the common product interface.

3. In the creator’s code find all references to product constructors. One by one, replace them with calls to the factory method, while extracting the product creation code into the factory method.

4. You might need to add a temporary parameter to the factory method to control the type of returned product.

5. At this point, the code of the factory method may look pretty ugly. It may have a large switch operator that picks which product class to instantiate. But don’t worry, we’ll fix it soon enough.

6.  Now, create a set of creator subclasses for each type of product listed in the factory method. Override the factory method in the subclasses and extract the appropriate bits of construction code from the base method.

7. If there are too many product types and it doesn’t make sense to create subclasses for all of them, you can reuse the control parameter from the base class in subclasses.

8. For instance, imagine that you have the following hierarchy of classes: the base Mail class with a couple of subclasses: AirMail and GroundMail; the Transport classes are Plane, Truck and Train. While the AirMail class only uses Plane objects, GroundMail may work with both Truck and Train objects. You can create a new subclass (say TrainMail) to handle both cases, but there’s another option. The client code can pass an argument to the factory method of the GroundMail class to control which product it wants to receive.

9.  If, after all of the extractions, the base factory method has become empty, you can make it abstract. If there’s something left, you can make it a default behavior of the method.

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

The creator class may have business logic coupled and only the factory method will return different objects.

## Credits

- https://sourcemaking.com/design_patterns/factory_method
- https://github.com/diegopacheco/java-design-patterns