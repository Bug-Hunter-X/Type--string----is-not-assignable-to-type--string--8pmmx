# Type 'string[]' is not assignable to type 'string'
This repository demonstrates a common TypeScript error: assigning an array of strings to a variable expecting a single string.  The provided code shows the error and its solution.

## Problem

The `greeter` function expects a single string argument. However, the code attempts to pass an array of strings.  This results in a TypeScript compilation error because the types are incompatible.

## Solution

The solution involves checking the type of the input and handling both single string and array of strings scenarios appropriately. This is achieved using type guards and array iteration.