#  Bridge

## Intent

Is a design pattern that lets you split a large class or a set of closely related classes into two separate hierarchies - abstraction and implementation - which can be developed indepedently of each other.

Abstraction (also called interface) is a high-level control layer for some entity. This layer isn’t supposed to do any real work on its own. It should delegate the work to the implementation layer (also called platform).

## How it works?

Basically, with inheritance we have a problem when we need to entend a class into two independent dimensions. The pattern bridge try to solve this, instead we use inheritance, we change to composition. The new dimension is extracted to a separate class in another hierarchy and the original class will reference an object of the new hierarchy, instead of having all of its state and behaviours within one class. This connection between the classes is called bridge. An example of interface is a view where the user can interact and the implementation could be the backend code called by the interface.

When we need to change a monolith code is very hard and we need to known every line of code to understand the impact. When we working on smaller things, into separate modules, is much easier.

The bridge pattern suggests that we divide the classes into two hierarchies:


    Abstraction: the GUI layer of the app.
    Implementation: the operating systems’ APIs.

## Applicability

- Use the bridge pattern when you want to divide and organize a monolithic class that has several variants of some functionality.
  - The bigger a class becomes, the harder it is to figure out how it works, and the longer it takes to make a change. The changes made to one of the variations of functionality may require making changes across the whole class, which often results in making errors or not addressing some critical side effects.
- Use the pattern when you need to extend a class in several orthogonal (independent) dimensions.
  - The Bridge suggests that you extract a separate class hierarchy for each of the dimensions. The original class delegates the related work to the objects belonging to those hierarchies instead of doing everything on its own.
- Use the Bridge if you need to be able to switch implementations at runtime.
  - Although it’s optional, the Bridge pattern lets you replace the implementation object inside the abstraction. It’s as easy as assigning a new value to a field.

## How to implement



- Identify the orthogonal dimensions in your classes. These independent concepts could be: abstraction/platform, domain/infrastructure, front-end/back-end, or interface/implementation.

- See what operations the client needs and define them in the base abstraction class.

- Determine the operations available on all platforms. Declare the ones that the abstraction needs in the general implementation interface.

- For all platforms in your domain create concrete implementation classes, but make sure they all follow the implementation interface.

- Inside the abstraction class, add a reference field for the implementation type. The abstraction delegates most of the work to the implementation object that’s referenced in that field.

- If you have several variants of high-level logic, create refined abstractions for each variant by extending the base abstraction class.

- The client code should pass an implementation object to the abstraction’s constructor to associate one with the other. After that, the client can forget about the implementation and work only with the abstraction object.

## Relations between patterns

### Bridge and Adapter

Bridge is usually designed up-front, letting you develop parts of an application independently of each other. On the other hand, Adapter is commonly used with an existing app to make some otherwise-incompatible classes work together nicely.

### Bridge and Strategy

Bridge, State, Strategy (and to some degree Adapter) have very similar structures. Indeed, all of these patterns are based on composition, which is delegating work to other objects. However, they all solve different problems. A pattern isn’t just a recipe for structuring your code in a specific way. It can also communicate to other developers the problem the pattern solves.

### Abstract factory and bridge

You can use Abstract Factory along with Bridge. This pairing is useful when some abstractions defined by Bridge can only work with specific implementations. In this case, Abstract Factory can encapsulate these relations and hide the complexity from the client code.

## Credits
- https://refactoring.guru/design-patterns/bridge

