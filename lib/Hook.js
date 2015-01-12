! function () {

  'use strict';

  /* Error? */ function Hook_Cookie_Filter (cookie, req, res) {
    if ( cookie.signed ) {
      return cookie.name in req.signedCookies;
    }

    return true;
  }

  /* Boolean */ function Hook_Env_Filter (env) {
    return pronto.app.get('env') === env;
  }

  /* Boolean */ function isTrue (/* Mixed */ i) {
    return i;
  }

  /* Function */ function Hook ( /* Object */ middleware ) {

    var pronto = this;

    if ( middleware.error ) {
      return middleware.middleware;
    }

    function Hook_Middleware (req, res, next) {

      var middleware = this;

      var passing = true;

      pronto.emit('message', (this.type.blue + ' ' + 
        (this.middleware.name || this.name)).bold);

      if ( middleware.cookies && middleware.cookies.length ) {
        middleware.cookies.forEach(function (cookie) {
          if ( passing ) {
            if ( ! Hook_Cookie_Filter(cookie, req, res) ) {
              passing = false;
            }
          }
        });
      }

      if ( passing ) {
        middleware.middleware(req, res, next);
      }
      else {
        next();
      }
    }

    return Hook_Middleware.bind(middleware);
  }

  module.exports = Hook;

} ();
