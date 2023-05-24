In TypeScript, you can use the keyword "never" to indicate that a function will never return a value. This can be useful in cases where you want to signal to the compiler that a function will always throw an error or exit the program, and will never return normally.

Here's an example:
```typescript
function throwError(message: string): never {
  throw new Error(message);
}
```
In this example, the function "throwError" takes a message string as an argument and throws an error with that message. Since the function always throws an error and never returns normally, we can annotate its return type as "never".