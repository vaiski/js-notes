# JavaScript idioms


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

The double bitwise negation operator `~~` is sometimes used to implement rounding a number towards zero.

It is faster than `Math.round` if you are dealing with positive numbers and faster than conditional use of `Math.floor` and `Math.ceil` if rounding towards zero is the desired functionality.
