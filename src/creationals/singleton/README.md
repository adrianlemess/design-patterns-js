# Singleton

## Intent
Singleton is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.

## Problem
Solve two problems at once:
1 - Ensure that a class has only 1 instance in runtime - control the access to shared resources like database or filesystem.
2 - Provide global access to an instance - instead of creating global variables with a risk to be overwritten for someone, we can use the singleton pattern to give global access and restrict to be override.


## Solution

- The constructor must be private to prevent others class to instantiate the singleton class
- Create a static creation method that acts as a constructor. Under the hood, this method calls the private constructor to create an object and saves it in a static field. All following calls to this method return the cached object.

## When to use



- Use the Singleton pattern when a class in your program should have just a single instance available to all clients; for example, a single database object shared by different parts of the program.

The Singleton pattern disables all other means of creating objects of a class except for the special creation method. This method either creates a new object or returns an existing one if it has already been created.

- Use the Singleton pattern when you need stricter control over global variables.

Unlike global variables, the Singleton pattern guarantees that there’s just one instance of a class. Nothing, except for the Singleton class itself, can replace the cached instance.

Note that you can always adjust this limitation and allow creating any number of Singleton instances. The only piece of code that needs changing is the body of the getInstance method.


## Pros and cons

+ You can be sure that a class has only a single instance.
+ You gain a global access point to that instance.
+ The singleton object is initialized only when it’s requested for the first time.

- The Singleton pattern can mask bad design, for instance, when the components of the program know too much about each other.
- The pattern requires special treatment in a multithreaded environment so that multiple threads won’t create a singleton object several times.
- It may be difficult to unit test the client code of the Singleton because many test frameworks rely on inheritance when producing mock objects. Since the constructor of the singleton class is private and overriding static methods is impossible in most languages, you will need to think of a creative way to mock the singleton. Or just don’t write the tests. Or don’t use the Singleton pattern.

## Credits

https://refactoring.guru/design-patterns/singleton