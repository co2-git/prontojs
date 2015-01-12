! function () {

  'use strict';

  var When = require('../When');

  function /* null */ prontoJS_buildMiddlewareMethod (
    /*String?*/ name, /*[When.Condition]*/ whens,
    /*Object*/ options, /*Function*/ middleware) {

    for ( var i in arguments ) {
      if ( typeof arguments[i] === 'string' ) {
        name = arguments[i];
      }
      
      else if ( Array.isArray(arguments[i]) ) {
        whens = arguments[i];
      }

      else if ( arguments[i] instanceof When.Condition ) {
        whens = [arguments[i]];
      }
      
      else if ( typeof arguments[i] === 'object' ) {
        options = arguments[i];
      
      }
      else if ( typeof arguments[i] === 'function' ) {
        middleware = arguments[i];
      }
    }

    options       =   options || {};

    var attributes = {
      routes:     [],
      methods:    [],
      statuses:   [],
      cookies:    [],
      envs:       [] 
    };

    whens = whens || [];

    if ( whens.length ) {
      console.log('WHEN!', whens);
    }

    whens.forEach(function (when) {
      for ( var attr in attributes ) {
        if ( when[attr] ) {
          attributes[attr] = attributes[attr].concat(when[attr]);
        }
      }
    });

    if ( ! attributes.routes.length ) {
      attributes.routes.push('/');
    }

    var verb = options.type || 'all';

    if ( ! options.type ) {
      if ( attributes.methods.length ) {
        if ( attributes.methods.length === 1 ) {
          verb = attributes.methods[0];
        }
      }
    }

    this.middlewares.push({

      name:         name,
      type:         verb,

      middleware:   middleware,

      options:      options,

      routes:       attributes.routes,
      statuses:     attributes.statuses,
      cookies:      attributes.cookies,
      envs:         attributes.envs

    });
  }

  module.exports = prontoJS_buildMiddlewareMethod;
} ();
