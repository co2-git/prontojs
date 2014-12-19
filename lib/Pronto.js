module.exports = (function () {

  'use strict';

  var path = require('path');

  var express = require('express');

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

    this.beforeStarting = [];

    require('./Log')(this);

    process.nextTick(function () {
      pronto.start();
    });
  }

  require('util').inherits(Pronto, require('events').EventEmitter);

  Pronto.prototype.start = require('./Pronto/start');

  Pronto.prototype.use = function (middleware) {
    this.middlewares.push({
      type: 'use',
      middleware: middleware
    });

    return this;
  };

  Pronto.prototype.buildMiddleware = function (name, condition, middleware) {

    var routes = [];
    
    var methods = [];

    if ( condition instanceof require('./When').Condition ) {
      routes = routes.concat(condition.routes);
      
      methods = methods.concat(condition.methods);
    }

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
      name: name,
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

  Pronto.prototype.open = require('./Pronto/open');

  Pronto.prototype.openFile = require('./Pronto/open-file');

  Pronto.prototype.openDirectory = require('./Pronto/open-directory');

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

    if ( typeof injection  === 'string' ) {
      this.app.locals[injection] = arguments[1];
    }

    else if  ( typeof injection === 'object' ) {
      for ( var i in injection ) {
        this.app.locals[i] = injection[i];
      }
    }

    return this;
  };

  Pronto.prototype.monson = function(first_argument) {
    return this;
  };

  Pronto.prototype.favicon = function(first_argument) {
    return this;
  };

  Pronto.prototype.passport = function(first_argument) {
    return this;
  };

  Pronto.prototype.socketIO = function(first_argument) {
    return this;
  };

  Pronto.exports = function (settings) {
    return new Pronto(settings);
  };

  Pronto.exports.when = require('./When');

  return Pronto.exports;

})();

