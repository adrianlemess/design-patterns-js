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