# JavaScript idioms

Here are described some idioms found in JavaScript code. Usually they are used to express a certain functionality in a shorter or more efficient way. All of these idioms are not always recommended because of their ambiguity or poor readability.


## Double negation (logical)

The double logical negation operator `!!` is sometimes used to test the truthiness of a variable regardless of the variable's type.

The double negation first makes the variable to be cast into a boolean, it's boolean value negated and then negated again resulting in a boolean value corresponding to the original typecast boolean value.

Most commonly it is used to determine if a variable is defined or not and if it's value is `null` or not.

```js
var age;  // age's value is undefined

function setAge(value) {
  if (!!value) {
    console.warn('Age must be set!');
    return false;
  }
  return true;
}

setAge();  // value undefined -> returns false
setAge(null);  // returns false
setAge(42);  // returns true
```


## Double negation (bitwise)

The double bitwise negation operator `~~` is sometimes used to implement rounding a number towards zero. It also returns zero if the operand is not a number.

It is faster than `Math.round` if you are dealing with positive numbers and faster than conditional use of `Math.floor` and `Math.ceil` if rounding towards zero is the desired functionality.

```js
~~3.85;     // => 3
~~(-4.25);  // => 4
~~true;     // => 0
~~{};       // => 0
~~"summer"; // => 0
~~"12.43";  // => 12
```


## Unary plus operator

The unary plus operator `+` is used to type cast a string to a decimal numeric value.

```js
+"14.47";  // => 14.47
+"42";     // => 42
+"-56.3";  // => -56.3
+"summer"; // => NaN
```


## Checking for undefined

Checking if a variable is undefined differs a bit depending on the scope of the variable. In local scope it is acceptable to use direct comparison (or logical double negation, see above), for example:

```js
function isNone(value) {
  return value === undefined || value === null;
}
```

In global scope, however, this is not possible but a type comparison should be used instead:

```js
if (typeof variable === "undefined") {
  /* code */
}
```
