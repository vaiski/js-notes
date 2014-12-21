# Module pattern

**Module pattern** is a way of emulating encapsulation found  in structures of other languages. The pattern provides encapsulation of object attributes by using closures and object literals. Hence, it usually employs another design pattern, [immediately-invoked function expression (IIFE)][1] to provide the privacy for the module.

## Principles

The encapsulation of module members is achieved by using an IIFE that returns an object containing references to the members exposed outside the module.

The basic structure is usually as follows:

```js
var module = (function () {
  // module member declarations for both, private and public
  return {
    // public members are exposed here
  }
})();
```

### Example

The following example shows the principles of the module pattern by simulating a lamp that can be turned on or off,  state toggled and its state printed as a string.

```js
var lampModule = (function () {
  var isOn = false;

  // A private method to give a string representation for the module's state.
  var stateString = function () {
    return isOn ? "on" : "off";
  };

  var turnOff = function () {
    isOn = false;
  };

  var turnOn = function () {
    isOn = true;
  };

  var toggle = function () {
    isOn = !isOn;
  };

  var toString = function () {
    return "The lamp is " + stateString();
  }

  // Methods are made public by returning an object.
  return {
    turnOff: turnOff,
    turnOn: turnOn,
    toggle: toggle,
    toString: toString
  };
})();
```

In the above example, the `lampModule` exposes a public API with four methods.

```js
lampModule.turnOn();
lampModule.toString(); // returns "The lamp is on"
lampModule.toggle();
lampModule.toString(); // returns "The lamp is off"
```

One method and a variable are private so they are not accessible outside the module.

```js
lampModule.isOn // returns undefined

// results in TypeError because stateString is undefined
lampModule.stateString()

```

## Module factory

```js
;(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], function (exports) {
      root.MyModule = factory(root, exports);
    });
  } else if (typeof exports !== "undefined") {
    factory(root, exports);
  } else {
    root.MyModule = factory(root, {});
  }
})(this, function (root, MyModule) {
  /* module definition */
  return MyModule;
});
```

```js
;(function (define) {
  define('id', function (require, exports) {
    var library = require('library');
    exports.name = value;
  });
})(typeof define === "function" && define.amd ? define : function (id, factory) {
  if (typeof exports !== "undefined") {
    factory(require, exports);
  } else {
    // TODO: come up with a good method for global function export
  }
});
```



## See also

 * [Immediately-invoked function expression][1]

[1]: iife.md
