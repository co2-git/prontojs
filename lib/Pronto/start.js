module.exports = (function () {
  
  'use strict';

  return (function start () {

    var pronto = this;

    var middleware_position = 0;

    this.app
      .set('port', +this.settings.port)
      .set('view engine', this.settings['view engine'])
      .set('views', this.settings.views);

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
      }]
      .concat(this.middlewares)
      .concat([
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
        pronto.app[middleware.type](middleware.routes.join('|'),
          middleware.middleware);
      }
    });

    // this.use(this.errorMiddleware());

    this.server = require('http').createServer(this.app);

    this.server.listen(this.settings.port, function () {
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
      summary.push(
        (middleware.type).blue + ' ' +
        (middleware.name).blue.bold + ' ' +
        ' when '.grey + (middleware.routes ? middleware.routes.join(' ') : '*' )
        );
    });

    return summary;
  }

})();
