module.exports = (function () {

  'use strict';

  return (function buildMiddleware (name, when, options, middleware) {
    
    for ( var i in arguments ) {
      if ( typeof arguments[i] === 'string' ) {
        name = arguments[i];
      }
      else if ( arguments[i] instanceof require('../When').Condition ) {
        when = arguments[i];
      }
      else if ( typeof arguments[i] === 'object' ) {
        options = arguments[i];
      }
      else if ( typeof arguments[i] === 'function' ) {
        middleware = arguments[i];
      }
    }

    options       =   options || {};

    var routes    =   [];
    
    var methods   =   [];

    var statuses  =   [];

    if ( when instanceof require('../When').Condition ) {
      routes    =   routes.concat(when.routes);
      
      methods   =   methods.concat(when.methods);

      statuses  =   statuses.concat(when.statuses);
    }

    if ( ! routes.length ) {
      routes.push('/');
    }

    var verb = options.type || 'all';

    if ( ! options.type ) {
      if ( methods.length ) {
        if ( methods.length === 1 ) {
          verb = methods[0];
        }
      }
    }

    this.middlewares.push({
      name:         name,
      type:         verb,
      routes:       routes,
      statuses:     statuses,
      middleware:   middleware,
      options:      options
    });

  });

})();
