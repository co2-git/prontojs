module.exports = (function () {
  
  'use strict';

  function When () {

    var condition;

    var routes = [],
      methods = [];

    for ( var i in arguments ) {
      condition = arguments[i];

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
    }

    return new (When.Condition)({
      routes: routes,
      methods: methods});

  }

  When.Condition = function (condition) {
    condition = condition || {};
    this.routes = condition.routes || [];
    this.methods = condition.methods || [];
    this.env = condition.env || [];
  };

  // assert

  When.assert = function () {

  };

  // assert.env

  When.assert.env = function (env) {
    return (process.env.NODE_ENV === env);
  }

  // begin

  When.begin = {
    by: function (begin) {
      return new (When.Condition)({ routes: ['/' + begin + '*'] });
    }
  };

  // env

  When.env = function (env) {
    return new (When.Condition)({ env: { NODE_ENV: env } });
  };

  // home

  When.home = new (When.Condition)({ routes: ['/'] });

  // in

  When.in = When.env;

  // prefix

  When.prefix = function ( prefix ) {
    var condition = When(prefix);
    condition.isPrefix = true;
    return condition;
  };

  return When;

})();