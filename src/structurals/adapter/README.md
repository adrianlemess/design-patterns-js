# Adapter


## Intent

The Adapter pattern translates one interface (an object's properties and methods) to another. Adapters allows programming components to work together that otherwise wouldn't because of mismatched interfaces. The Adapter pattern is also referred to as the Wrapper Pattern.

One scenario where Adapters are commonly used is when new components need to be integrated and work together with existing components in the application.

Another scenario is refactoring in which parts of the program are rewritten with an improved interface, but the old code still expects the original interface. 

## Participants

The objects participating in this pattern are:

Client -- In sample code: the run() function.
    - calls into Adapter to request a service
Adapter -- In sample code: ShippingAdapter
    - implements the interface that the client expects or knows
Adaptee -- In sample code: AdvancedShipping
        - the object being adapted
        - has a different interface from what the client expects or knows


## Problem

Image that you have an app receiving it data in XML format from multiple sources. At some point, you decide to improve the app integrating a library that only works with JSON format. 

You could change your library to JSON format, but this might break some users who use the library and in some scenarios you cannot have access to the library code.


## Solution

The adapter is a special object that converts the interface of one object to another object understand.

An adapter wraps one of the objects to hide the complexity of conversion happening behind the scenes. The wrapped object isn’t even aware of the adapter. For example, you can wrap an object that operates in meters and kilometers with an adapter that converts all of the data to imperial units such as feet and miles.

Adapters can not only convert data into various formats but can also help objects with different interfaces collaborate. Here’s how it works:

- The adapter gets an interface, compatible with one of the existing objects.
- Using this interface, the existing object can safely call the adapter’s methods.
- Upon receiving a call, the adapter passes the request to the second object, but in a format and order that the second object expects.

Sometimes it’s even possible to create a two-way adapter that can convert the calls in both directions.

## Real World example

If you travel to another country your notebook power plug won't work because is a different standanrd and you will need and adapter.

## Applicability

Use the Adapter pattern when

- you want to use an existing class, and its interface does not match the one you need
- you want to create a reusable class that cooperates with unrelated or unforeseen classes, that is, classes that don't necessarily have compatible interfaces
- you need to use several existing subclasses, but it's impractical to adapt their interface by subclassing every one. An object adapter can adapt the interface of its parent class.
- most of the applications using third party libraries use adapters as a middle layer between the application and the 3rd party library to decouple the application from the library. If another library has to be used only an adapter for the new library is required without having to change the application code.

## Implementation

The example code presents an online flight ticket pricing calculation system. The old version used to make computations one way, now the improved one uses user identification and modernized pricing calculation. We introduce an adapter allowing the client program to continue working without any API changes by matching the old interface with the new one.

## Credits

- https://github.com/diegopacheco/java-design-patterns/tree/master/adapter
- https://refactoring.guru/design-patterns/adapter