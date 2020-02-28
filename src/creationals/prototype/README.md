# Prototype 

## Intent

Prototype let's you to copy existing objects without be dependent on their classes.

## Wikipedia 

The prototype pattern is a creational design pattern in software development. It is used when the type of objects to create is determined by a prototypical instance, which is cloned to produce new objects

## Problem

Say you have an object, and you want to create an exact copy of it. How would you do it? First, you have to create a new object of the same class. Then you have to go through all the fields of the original object and copy their values over to the new object.

Nice! But there’s a catch. Not all objects can be copied that way because some of the object’s fields may be private and not visible from outside of the object itself.

There’s one more problem with the direct approach. Since you have to know the object’s class to create a duplicate, your code becomes dependent on that class. If the extra dependency doesn’t scare you, there’s another catch. Sometimes you only know the interface that the object follows, but not its concrete class, when, for example, a parameter in a method accepts any objects that follow some interface.

## Solution

- The Prototype pattern delegates the cloning process to the actual objects that are being cloned. The pattern declares a common interface for all objects that support cloning. This interface lets you clone an object without coupling your code to the class of that object. Usually, such an interface contains just a single clone method.
- When an object is too large with many properties and it's hard to clone
- When we don't want to implement the logic to clone an object on the place we need the object cloned
- It's possible to use with Factory Method where we have a catalog with prototypes and we return one of this prototypes based in a parameter passed


## Aplicability

Use the Prototype pattern when your code shouldn’t depend on the concrete classes of objects that you need to copy.

This happens a lot when your code works with objects passed to you from 3rd-party code via some interface. The concrete classes of these objects are unknown, and you couldn’t depend on them even if you wanted to.

The Prototype pattern provides the client code with a general interface for working with all objects that support cloning. This interface makes the client code independent from the concrete classes of objects that it clones.

Use the pattern when you want to reduce the number of subclasses that only differ in the way they initialize their respective objects. Somebody could have created these subclasses to be able to create objects with a specific configuration.

The Prototype pattern lets you use a set of pre-built objects, configured in various ways, as prototypes.

Instead of instantiating a subclass that matches some configuration, the client can simply look for an appropriate prototype and clone it.


## Tradeoffs

+ You can clone objects without coupling to their concrete classes.
+ You can get rid of repeated initialization code in favor of cloning pre-built prototypes.
+ You can produce complex objects more conveniently.
+ You get an alternative to inheritance when dealing with configuration presets for complex objects.

-  Cloning complex objects that have circular references might be very tricky.


## Tips

Becarefull with nested objects, they should have a special treatment