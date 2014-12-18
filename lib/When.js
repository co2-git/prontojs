module.exports = (function () {
  
  'use strict';

  function When (condition) {

    var routes = [],
      methods = [];

    if ( typeof condition === 'object' ) {
      
      for ( var key in condition ) {
        switch ( key ) {
          
          case 'route':
            routes.push(condition[key]);
            break;

          case 'method':
            methods.push(condition[key].toLowerCase());
            break;

        }
      }
    }

    else if ( typeof condition === 'string' ) {

      routes.push(condition);

    }

    return new (When.Condition)(routes, methods);

  }

  When.Condition = function (routes, methods) {
    this.routes = routes || [];
    this.methods = methods || [];
  };

  When.home = new (When.Condition)('/');

  When.begin = {
    by: function (begin) {
      return new (When.Condition)('/' + begin + '*');
    }
  };

  return When;

})();