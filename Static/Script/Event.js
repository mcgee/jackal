define(function () {
  return function (parent) {
    var pThis = this,
      handlers = [];

    pThis.addHandler = addHandler;
    pThis.fireHandlers = fireHandlers;

    function addHandler(handler) {
      handlers.push(handler);
    }

    function fireHandlers(args) {
      handlers.forEach(function (handler) {
        handler(parent, args);
      });
    }
  };
});