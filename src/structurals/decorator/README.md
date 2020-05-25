# Decorator 

It's a pattern that allows add new behavious to an object by adding this object into a wrapper with theses new behavious

## Problem

Imagine that you've created a notification library. The initial version of notifcation class has only a few fiels and a send() method responsible to send email notifications.

Then using this library you realize that your users expect more than just email notifications. Many of them want to receive push notifications, others facebook notification and others corporactive users want slack notifications.

Ok, a good way to solve this problem is extending the notification class to each type of notification and add the new methods and fields necessary in each class. The problem is, what happen if I want to send multiple notifications at once? Example, something is on fire and I want to be notify as many as posible place I have and the client should create an instance to each subclass, wich is very hard.

You could create subclasses combine each notification method. Ex: Facebook + slack, slack + sms, slack + sms + push, but you would probably stay with a lot of subclasses and this is not a good solution.

## Solution

When you need to extend an object inheritance is the first fing that comes to mind. But with inheritance we face some problems:
- Inheritance is static. We cannot alter an object behaviour in runtime, we should create the subclass previously
- In most language a subclass has only one parent, we cannot extend multiple classes

The ways to overcome inheritance is agreggation or composition. Both of the alternatives work on the same way: one object has a reference to another and delegates it some work, where in inheritance the object itself do all work. With this approach is easier to replace the linked object in runtime, changing the behaviour at runtime. Agreggation/Composition is key to many patterns include decorator pattern.

The pattern decorator can also be called wrapper. A wrapper is an object linked to some "target" object.The wrapper object has the same set of methods of the delegate object, but in some point it should alter the result, by doing something either before or after the request to the delegate object.

## Applicability

- Use this pattern when is akward or not possible to extend an object.
- Use the Decorator pattern when you need to be able to assign extra behaviors to objects at runtime without breaking the code that uses these objects.

## How to implement

Make sure your business domain can be represented as a primary component with multiple optional layers over it.

Figure out what methods are common to both the primary component and the optional layers. Create a component interface and declare those methods there.

Create a concrete component class and define the base behavior in it.

Create a base decorator class. It should have a field for storing a reference to a wrapped object. The field should be declared with the component interface type to allow linking to concrete components as well as decorators. The base decorator must delegate all work to the wrapped object.

Make sure all classes implement the component interface.

Create concrete decorators by extending them from the base decorator. A concrete decorator must execute its behavior before or after the call to the parent method (which always delegates to the wrapped object).

The client code must be responsible for creating decorators and composing them in the way the client needs.

## Relations with others patterns

Adapter changes the interface of an existing object, while Decorator enhances an object without changing its interface. In addition, Decorator supports recursive composition, which isn’t possible when you use Adapter.

Adapter provides a different interface to the wrapped object, Proxy provides it with the same interface, and Decorator provides it with an enhanced interface.

Chain of Responsibility and Decorator have very similar class structures. Both patterns rely on recursive composition to pass the execution through a series of objects. However, there are several crucial differences.

The CoR handlers can execute arbitrary operations independently of each other. They can also stop passing the request further at any point. On the other hand, various Decorators can extend the object’s behavior while keeping it consistent with the base interface. In addition, decorators aren’t allowed to break the flow of the request.

Composite and Decorator have similar structure diagrams since both rely on recursive composition to organize an open-ended number of objects.

A Decorator is like a Composite but only has one child component. There’s another significant difference: Decorator adds additional responsibilities to the wrapped object, while Composite just “sums up” its children’s results.

However, the patterns can also cooperate: you can use Decorator to extend the behavior of a specific object in the Composite tree.

Designs that make heavy use of Composite and Decorator can often benefit from using Prototype. Applying the pattern lets you clone complex structures instead of re-constructing them from scratch.

Decorator lets you change the skin of an object, while Strategy lets you change the guts.

Decorator and Proxy have similar structures, but very different intents. Both patterns are built on the composition principle, where one object is supposed to delegate some of the work to another. The difference is that a Proxy usually manages the life cycle of its service object on its own, whereas the composition of Decorators is always controlled by the client.

## Credits
https://refactoring.guru/design-patterns/decorator
