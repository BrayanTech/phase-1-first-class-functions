// index.js

function receivesAFunction(callback) {
    callback();
  }
  
  function returnsANamedFunction() {
    function namedFunction() {
      // function body here
    }
    return namedFunction;
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
      // function body here
    };
  }
  
  module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction
  };
  