module.exports = (function () {

  'use strict';

  var express = require('express');

  var path = require('path');

  function Pronto (settings) {

    settings = settings || {};

    var pronto = this;

    this.settings = {
      protocol:       settings.protocol || 'http',
      port:           settings.port || process.env.PORT || 3000,
      'view engine':  settings['view engine'] || 'jade',
      views:          settings.views || 'views'
    };

    this.middlewares = [];

    this.app = express();

    require('./Log')(this);

    process.nextTick(function () {
      pronto.start();
    });
  }

  require('util').inherits(Pronto, require('events').EventEmitter);

  Pronto.prototype.start = function () {

    var pronto = this;

    this.app
      .set('port', +this.settings.port)
      .set('view engine', this.settings['view engine'])
      .set('views', this.settings.views);

    this.app.use(function (req, res, next) {

      req.startTime = Date.now();

      pronto.emitRequest(req);

      next();
    });

    this.app.use(require('body-parser').urlencoded({ extended: false }));

    this.app.use(require('body-parser').json());

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

    this.app.use(function (req, res, next) {
      res.statusCode = 404;
      pronto.emitResponse(req, res);
      pronto.emit(404, req.originalUrl);
    });

    this.server = require('http').createServer(this.app);

    this.server.listen(this.settings.port, function () {
      pronto.emit('listening', {
        port: pronto.app.get('port'),
        protocol: 'http',
        pid: process.pid,
        env: pronto.app.get('env'),
        settings: pronto.settings
      });
    });
  };

  Pronto.prototype.use = function (middleware) {
    this.middlewares.push({
      type: 'use',
      middleware: middleware
    });

    return this;
  };

  Pronto.prototype.buildMiddleware = function (conditions, middleware) {
    var routes = [];
    
    var methods = [];

    conditions.forEach(function (condition) {
      if ( condition instanceof Pronto.exports.when.Condition ) {
        routes = routes.concat(condition.routes);
        methods = methods.concat(condition.methods);
      }
    });

    if ( ! routes.length ) {
      routes.push('/');
    }

    var verb = 'all';

    if ( methods.length ) {
      if ( methods.length === 1 ) {
        verb = methods[0];
      }
    }

    this.middlewares.push({
      type: verb,
      routes: routes,
      middleware: middleware
    });
  };

  Pronto.prototype.emitRequest = function (req) {
    this.emit('request', {
      method: req.method,
      url: req.originalUrl
    });
  };

  Pronto.prototype.emitResponse = function (req, res) {
    this.emit('response', {
      status: res.statusCode,
      method: req.method,
      url: req.originalUrl,
      time: (Date.now() - req.startTime)
    });
  };

  Pronto.prototype.send = function (message) {

    var conditions = Array.prototype.slice.call(arguments);

    conditions.shift();

    this.buildMiddleware(conditions, function (req, res, next) {
      res.send(message);
    });

    return this;
  };

  Pronto.prototype.view = function (view) {

    var pronto = this;

    var conditions = Array.prototype.slice.call(arguments);

    conditions.shift();

    this.buildMiddleware(conditions, function (req, res, next) {

      pronto.emitResponse(req, res);

      res.render(view);
    });

    return this;
  };

  Pronto.prototype.browse = function (directory, route) {

    var pronto = this;

    this.middlewares.push({
      type: 'use',
      routes: [route],
      middleware: function (req, res, next) {

        var strip = new RegExp('^' + route);

        var file = path.join(process.cwd(), directory,
          req.path.replace(strip, ''));

        require('fs').stat(file, function (error, stat) {
          if ( error ) {
            return next(error);
          }

          if ( ! stat.isFile() ) {
            return next(new Error(file + ' is not a file'));
          }

          pronto.emitResponse(req, res);

          next();
        });
      }
    });

    this.middlewares.push({
      type: 'use',
      routes: [route],
      middleware: express.static(directory)
    });

    return this;
  };

  Pronto.prototype.errorMiddleware = function () {

    var pronto = this;
   
    return function middleware (error, req, res, next) {

      if ( ! error instanceof Error ) {
        return next();
      }

      var domain = require('domain').create();

      domain.on('error', function (error) {
        next(error);
      });

      domain.run(function () {

        if ( error.name === 'AssertionError' ) {
          res.statusCode = 400;
        }

        else {
          res.statusCode = 500;
        }

        pronto.emit('error', error);

        // res.locals.logResponse();

        res.format({
          json: function () {
            res.json({
              error: {
                name: error.name,
                message: error.message,
                stack: app.locals.settings.env && error.stack && error.stack.split(/\n/),
                statusCode: res.statusCode
              }
            });
          },

          html: function () {
            res.send('<!DOCTYPE html><meta charset="utf-8"><title>App Error</title><h1>App Error</h1><pre>' + (app.locals.settings.env && error.stack && error.stack.split(/\n/)) + '</pre><hr>');
          }
        });
      });
    };
  };

  Pronto.prototype.inject = function (injection) {
    for ( var i in injection ) {
      this.app.locals[i] = injection[i];
    }

    return this;
  };

  Pronto.exports = function (settings) {
    return new Pronto(settings);
  };

  Pronto.exports.when = require('./When');

  return Pronto.exports;

})();

