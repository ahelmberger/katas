'use strict';

if (!Function.prototype.bind) {
  // jshint freeze: false
  Function.prototype.bind = function (context) {
    if (typeof this !== 'function') {
      // closest thing possible to the ECMAScript 5 internal IsCallable function
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }

    var args = Array.prototype.slice.call(arguments, 1);
    var functionToBind = this;
    var EmptyFunction = function () {};
    var boundFunction = function () {
      return functionToBind.apply(this instanceof EmptyFunction && context ? this : context, args.concat(Array.prototype.slice.call(arguments)));
    };

    EmptyFunction.prototype = this.prototype;
    boundFunction.prototype = new EmptyFunction();

    return boundFunction;
  };
}
