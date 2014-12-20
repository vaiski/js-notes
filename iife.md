# Immediately-invoked function expression

**Immediately-invoked function expression** or **IIFE** is a function expression that creates a lexical scope. It can be used to implement privacy on parts of the code, protect against polluting the global scope and to avoid variable hoisting from within blocks.

```js
;(function (window, undefined) {
  /* code */
})(window);
```

## Characterstics and variations

### Defensive semicolon

Semicolon before the closure parentheses is referred as a *defensive semicolon*. It is used to protect against function-call on the  previous line of code in case of i.e. concatenation with code that omits optional semicolons.

```js
var a = b + c
(function () {

})();
```

The above code would be interpreted as a function call to a return value of a function call to a function named `c` with an anonymous function as a parameter.



### Unary operator expression

Unary operators (`!`, `~`, `+` and `-`) can be used to create a function expression similarly as with the parentheses described above. This technique is seen in some libraries and frameworks.

```js
!function (window, undefined) {
  /* code */
}(window);
```

The motivation to use unary operators to create a function expression might be saving a character and stylistic preference. In addtion to saving a character, the use of unary operator also renders the usage of defensive semicolon unnecessary so it actually saves two characters.

On the other hand, this method makes returning a value from a function somewhat vague:

```js
!function () {
  return 8;
}(); // returns false

-function () {
  return true;
}(); // returns -1
```

The above-mentioned drawback on return values makes this method also unsuitable to be used in module declarations. Hence, this method is best suited for impure functions that have no return value.


## Usage

 * [Module pattern](module.md)
