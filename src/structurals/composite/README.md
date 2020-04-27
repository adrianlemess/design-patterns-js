# Composite

## Intent

Composite allow us compose objects into tree structure and work with these structures as if they were individual objects.

## Problem

We should pick up this pattern when the core model of our app can be represented as a tree.

Example: We have Products and Boxes. A Box can contain severan Products as well as a number of smaller Boxes. Theses little boxes haave the same Products and even smaller Boxes.

If we need to calculate a total price of this products, its hard to passing in all boxes, unwrap everything and then calculate the total price.

## Solution

The Composite Pattern suggest that you work with Products and Boxes through a common interface wich declares a method for calculating the total price. 

How would this method work? For a product, it’d simply return the product’s price. For a box, it’d go over each item the box contains, ask its price and then return a total for this box. If one of these items were a smaller box, that box would also start going over its contents and so on, until the prices of all inner components were calculated. A box could even add some extra cost to the final price, such as packaging cost.

The greatest benefit of this approach is that you don’t need to care about the concrete classes of objects that compose the tree. You don’t need to know whether an object is a simple product or a sophisticated box. You can treat them all the same via the common interface. When you call a method, the objects themselves pass the request down the tree.


## Elements

- Client - will call an execution method though the component interface
- Component interface - Implemented by Leaf and Composite/Container
- Leaf - Do some work, has the execution method and no children
- Composite - Has others methods responsible to work with sub-elements

## How to Implement

1. Make sure that the core model of your app can be represented as a tree structure. Try to break it down into simple elements and containers. Remember that containers must be able to contain both simple elements and other containers.

2. Declare the component interface with a list of methods that make sense for both simple and complex components.

3. Create a leaf class to represent simple elements. A program may have multiple different leaf classes.

4. Create a container class to represent complex elements. In this class, provide an array field for storing references to sub-elements. The array must be able to store both leaves and containers, so make sure it’s declared with the component interface type.

5. While implementing the methods of the component interface, remember that a container is supposed to be delegating most of the work to sub-elements.

6. Finally, define the methods for adding and removal of child elements in the container.

7. Keep in mind that these operations can be declared in the component interface. This would violate the Interface Segregation Principle because the methods will be empty in the leaf class. However, the client will be able to treat all the elements equally, even when composing the tree.


## Pros and Cons

+ You can work with complex tree structures more conveniently: use polymorphism and recursion to your advantage.
+ Open/Closed Principle. You can introduce new element types into the app without breaking the existing code, which now works with the object tree.
- It might be difficult to provide a common interface for classes whose functionality differs too much. In certain scenarios, you’d need to overgeneralize the component interface, making it harder to comprehend.
  
## Credits
- https://refactoring.guru/design-patterns/composite
- 