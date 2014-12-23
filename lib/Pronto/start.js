module.exports = (function () {
  
  'use strict';

  return (function start () {

    var pronto = this;

    var middleware_position = 0;

    this.app
      .set('port', +this.port);

    this.app.use(function (req, res, next) {

      req.startTime = Date.now();

      req.suggestedType = 'html';

      if ( /\.css$/i.test(req.originalUrl) ) {
        req.suggestedType = 'css';
      }

      else if ( /\.js$/i.test(req.originalUrl) ) {
        req.suggestedType = 'js';
      }

      else if ( /\.jade$/i.test(req.originalUrl) ) {
        req.suggestedType = 'jade';
      }

      pronto.emitRequest(req);

      next();
    });

    this.middlewares = [
      {
        type: 'use',
        name: 'encode/decode URLs',
        middleware: require('body-parser').urlencoded({ extended: false })
      },

      {
        type: 'use',
        name: 'parse JSON',
        middleware: require('body-parser').json()
      },

      {
        type: 'use',
        name: 'Pronto pre-router',
        middleware: function (req, res, next) {
          res.locals.req = req;

          try {
            res.locals.package = require(
              require('path').join(process.cwd(), 'package.json'));
          }
          catch ( error ) {
            console.log('djhsdjsdjkshkj',require('path').join(process.cwd(), 'package.json'))
          }

          next();
        }
      }]
      
      .concat(this.middlewares)
      
      .concat([
        {
          type: 'use',
          name: 'error catcher',
          middleware: function (error, req, res, next) {
            res.statusCode = 500;
            pronto.emitResponse(req, res);
            pronto.emitError(error);
          }
        },
        
        {
          type: 'use',
          name: 'not found',
          middleware: function (req, res, next) {
            res.statusCode = 404;
            res.type(req.suggestedType);
            pronto.emitResponse(req, res);
            pronto.emit(404, req.originalUrl);
            res.end();
          }
        }]);

    this.middlewares.forEach(function (middleware) {
      if ( ! middleware.routes || ! middleware.routes.length ) {
        pronto.app[middleware.type](middleware.middleware);
      }
      else {
        pronto.app[middleware.type](middleware.routes,
          middleware.middleware);
      }
    });

    // this.use(this.errorMiddleware());

    this.server = require('http').createServer(this.app);

    this.server.listen(this.port, function () {
      pronto.emit('listening', {
        port: pronto.app.get('port'),
        protocol: 'http',
        pid: process.pid,
        env: pronto.app.get('env'),
        middlewares: middlewaresSummary(pronto.middlewares)
      });
    });

  });

  function middlewaresSummary (middlewares) {
    var summary = [];

    middlewares.forEach(function (middleware) {
      var middleware_summary = [(middleware.type).blue,
        (middleware.name).blue.bold];

      if ( middleware.name === 'open file' ) {
        middleware_summary.push(middleware.options.file);
      }

      else if ( middleware.name === 'open directory' ) {
        middleware_summary.push(middleware.options.directory);

        if ( middleware.options.opener ) {
          for ( var i in middleware.options.opener ) {
            switch ( i ) {
              case 'as':
                middleware_summary.push('as'.grey,
                  middleware.options.opener.as);
                break;

              case 'index':
                middleware_summary.push('using as index'.grey,
                  middleware.options.opener.index);
                break;

              case 'append extension':
                middleware_summary.push('appending extension'.grey,
                  middleware.options.opener['append extension']);
                break;

              case 'with':
                middleware_summary.push('with'.grey,
                  middleware.options.opener.with);
                break;
            }
          }
        }
      }

      else if ( middleware.name === 'redirect' ) {
        middleware_summary.push('to'.grey, middleware.options.redirect);
      }

      if ( middleware.routes ) {
        middleware_summary.push('when'.grey, middleware.routes.join(' or '.grey));
      }

      summary.push(middleware_summary.join(' '));
    });

    return summary;
  }

})();
