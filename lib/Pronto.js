! function () {

  'use strict';

  /**
                                      888             d8b          
                                      888             Y8P          
                                      888                          
    88888b.  888d888 .d88b.  88888b.  888888 .d88b.  8888 .d8888b  
    888 "88b 888P"  d88""88b 888 "88b 888   d88""88b "888 88K      
    888  888 888    888  888 888  888 888   888  888  888 "Y8888b. 
    888 d88P 888    Y88..88P 888  888 Y88b. Y88..88P  888      X88 
    88888P"  888     "Y88P"  888  888  "Y888 "Y88P"   888  88888P' 
    888                                               888          
    888                                              d88P          
    888                                 .d$::::::..888P"           
     ".                              .d$$$$$::::::::::::...
                                   d$$$$$$$:::::::::::::::::::..
                                  d$$$$$$$::::::::::::::::::::::::.
                                 d$$$$$$::::::::::::::::::::::::::::.
                               .d$$$$$$:::::::::::::::::::::::::::::::.
                              .d$$$$$$::::::::::::::::::::::::::::::::::
                             .d$$$$$:::::::::::::::::::::::::::::::::::::.
                            .d$$$$$$$$$$::::::::::::::::::::::::::::::::::.
                           .d$$$$$$$$$$$$$$$$$$$$$$::::::::::::::::::::::::
                          .d$$$$$$$$$$$$$$$$$$$$$$$$$$$$:::::::::::::::::::
                          d$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$:::::::::::
      .:::::::::.        .$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$:::::::
      `:::::::::::::.    $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$::::
       `::::::::::::::::'::$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$::
        :::::::::::::::::::::::.$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$:
         ::$$$:$$$$$$$$$$$$$$$$$$$Ss.::::::::*4$$$$$$$$$$$$$$$$$$$$$$$$$$$$
          $$$$$$$$$$$$$$$$$$$$$$$$$$$$$Ss:::::::::*4$$$$$$$$$$$$$$$$$$$$$$$
           `q$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$Ss:::::::::*4$$$$$$$$$$$$$$$$$$
              `q$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$Ss:::::::::*4$$$$$$$$$$$$$
                `q$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$Ss::::::::*44$$$$$$$
                   .$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$Ss::::::::*4$$$
                  :$$$$$$$$$$$$$$$$$$.    `$$$$$$$$$$$$$$$$$$$$$$Ss:::::::;
                  `$$$$$$$$$$$$$$$$$$$$.   `:::$$:$!$$$$$$$$$$$$$$$$$$Ss::;
                   $$$$$$$$$$$$$$$$$$$$$.    ::::$$$$$$$$$$$$$$$$$$$$$$$$$$
                   `$$$$$$$$$$$  $$`$$$$$'      :$$$$$: ":$$$$$$$$$$$$$$$$$
                    $$$$$$$$$$$$$!   $$$$      ::$$$$$" $$::":::`$$$$$$$$$$
                    $$$$$$  `qp'   .s$$$'        :""$$  $:":"      `$$$$$$$
                    $$$$$$       4$$$$$$         $$"                $$$$$$$
                   .$$$$$$.       `$$$$'                            $$$$
                   $$$$$$$$7      .$$$$                             `;'
                   $$$$$$$$     .$$$$'
                   $$$$$$$    .$$$$$$._                             ;
                   $$$$$$$  A.$$$$$$$$Ss. 'cqp
                   `$$$$$$ $$$$$$$$$!!                             ;
                    $$$$$$ $$$$$$$$!~                             ;
                    `$$$$$ $ $$$$$$$$$$  ~                       ;
                     `$$$$$$$$$$$$!!~ ~!$~~ ~~$!~               ;
                    .s$$$$$$$$$$$$$$ ~ ~   ~     ~             ;
               _.sS$$$$$$$$$$$$$$$$$$$$$$$!~~     ::::      :.'$$$
           _.sS$$$$$$$$$$$$$$$$$!$!!         ~   ::: : :: .'  $$$$
       _.sS$$$$$$$$$$$$$$$$$$$$$$$$~~             :::::::.'   .$$$$$Ss._
    .sS$$$$$$$$$$$$$$$$$$$$$$$$$$$$:":""       : ::::::.'     !$$$$$$$$$Ss.
    $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$:::"" """":::::.'      .$$$$$$$$$$$$$
    $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$:::.''         !$$$$$$$$$$$$$
    $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$.''            .$$$$$$$$$$$$$$
    $$$$$$$$$$$$$$$$$$$$$        """"""""""";              .$$$$$$$$$$$$$$$
    $$$$$$$$$$$$$$$$$$$$$.       MMMMMMMMMMM;             .$$$$$$$$$$$$$$$$
    $$$$$$$$$$$$$$$$$$$$$$.      MMMMMMMMMMMM;            !$$$$$$$$$$$$$$$$
    $$$$$$$$$$$$$$$$$$$$$$$S.    MMMMMMMMM'   ;          .$$$$$$$$$$$$$$$$$
    $$$$$$$$$$$$$$$$$$$$$$$$$.   MMMMMMMM'     ;        .$$$$$$$$$$$$$$$$$$
    $$$$$$$$$$$$$$$$$$$$$$$$$$.  MMMMMMM'       ;      .$$$$$$$$$$$$$$$$$$$
    $$$$$$$$$$$$$$$$$$$$$$$$$$$. MMMMM'          ;    .$$$$$$$$$$$$$$$$$$$$
    $$$$$$$$$$$$$$$$$$$$$$$$$$$$MMMMMMM           ;  .$$$$$$$$$$$$$$$$$$$$$
    $$$$$$$$$$$$$$$$$$$$$$$$$$$$$MMMMMMMMz.       ; .$$$$$$$$$$$$$$$$$$$$$$
    $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$MMMMMMMMMz      ;.$$$$$$$$$$$$$$$$$$$$$$$
    $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$MMMMMMMMMM.   ;.$$$$$$$$$$$$$$$$$$$$$$$$


  */

  var path      =   require('path');

  var express   =   require('express');

  /**
   *    @class
   *    @arg        {Object} settings
   */

  function Pronto (settings) {

    settings = settings || {};

    var pronto = this;

    /**   Server Port
     *
     *    @type           {Number=3000}
     *    @description    Server port
     *    @default        3000
     */

    this.port             =     settings.port || process.env.PORT || 3000;

    /**   Server protocol
     *
     *    @type           {String="http"}
     *    @description    Protocol (http or https)
     *    @default        "http"
     */

    this.protocol         =     settings.protocol || 'http';

    /**   Document Root
     *
     *    @type           {String=process.cwd()}
     *    @description    Document root
     *    @default        process.cwd()
     */

    this.root             =     settings.root || process.cwd();

    /**   Request middlewares
     *
     *    @type           []
     *    @description    The request middlewares
     *    @default        []
     */

    this.middlewares      =     [];

    /**   Link to Express library
     *
     *    @type           Function
     *    @description    Express module
     */

    this.express          =     express;

    /**   Express app
     *
     *    @type           Function
     *    @description    Express app
     */

    this.app              =     express();

    this.beforeStarting   =     [];

    this.openers          =     {};

    if ( settings.debug ) {
      require('./Log')(this);
    }

    this.domain           =     require('domain').create();

    this.domain.on('error', function (error) {
      pronto.emit('error', error);
    });

    process.nextTick(function () {

      pronto.on('error', function (error) {
        // ...
      });

      pronto.start();
    });
  }

  /**
   *    @extends    EventEmitter
   */                                                       
                                                                   

  require('util').inherits(Pronto, require('events').EventEmitter);

  /**
   *    @method
   */                                                  

  Pronto.prototype.start = require('./Pronto/start');

  /**
   *    @method
   */ 

  Pronto.prototype.opener = function (name, fn) {
    this.openers[name] = fn;

    return this;
  };

  /**
   *    @method
   */                          

  Pronto.prototype.use = function (middleware) {
    this.middlewares.push({
      type: 'use',
      middleware: middleware
    });

    return this;
  };

  /**
   *    @method
   */ 

  Pronto.prototype.buildMiddleware = require('./Pronto/build-middleware');

  /**
   *    @method
   */ 

  Pronto.prototype.emitRequest = function (req) {
    this.emit('request', {
      method: req.method,
      url: req.originalUrl
    });
  };

  /**
   *    @method
   */ 

  Pronto.prototype.emitResponse = function (req, res, size) {
    size = size || 0;

    if ( res.socket && res.socket.bytesRead && ! size ) {
      size = res.socket.bytesRead;
    }

    var unit = 'B';

    var unitColor = 'white';

    if ( size > (1024 * 100) ) {
      unitColor = 'red';
    }

    else if ( size > (1024 * 50) ) {
      unitColor = 'yellow';
    }

    if ( size > 1024 ) {
      size = Math.ceil(size / 1024);
      unit = 'KB';
    }

    this.emit('response', {
      status: res.statusCode,
      method: req.method,
      url: req.originalUrl,
      time: (Date.now() - req.startTime),
      size: (size.toString() + ' ' + unit)[unitColor]
    });
  };

  /**
   *    @method
   */ 

  Pronto.prototype.emitMessage = function (label, message) {
    var obj = {};

    obj[label] = message;

    this.emit('message', obj);
  };

  /**
   *    @method
   */ 

  Pronto.prototype.emitError = function (error) {
    this.emit('error', {
      name: error.name,
      message: error.message,
      code: error.code,
      stack: (error.stack || '').split(/\n/)
    });
  };

  /**
   *    @method
   */ 

  Pronto.prototype.send = function (message) {

    var conditions = Array.prototype.slice.call(arguments);

    conditions.shift();

    this.buildMiddleware(conditions, function (req, res, next) {
      res.send(message);
    });

    return this;
  };

  /**
   *    @method
   */ 

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

  /**
   *    @method
   */ 

  Pronto.prototype.redirect = function (url, when) {
    var pronto = this;

    this.buildMiddleware('redirect', when, { redirect: url },
      function (req, res, next) {

        res.statusCode = 301;

        pronto.emitResponse(req, res);

        res.redirect(url);
      });

    return this;
  };

  /**
   *    @method
   */ 

  Pronto.prototype.open = require('./Pronto/open');

  /**
   *    @method
   */ 

  Pronto.prototype.openFile = require('./Pronto/open-file');

  /**
   *    @method
   */ 

  Pronto.prototype.openDirectory = require('./Pronto/open-directory');

  /**
   *    @method
   */ 

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

  /**
   *    @method
   */ 

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

  Pronto.prototype.exec = function(first_argument) {
    return this;
  };

  Pronto.prototype.cookie = function (secret, options) {

    var cookieParser = require('cookie-parser');

    this.middlewares.push({
      type: 'use',
      name: 'cookie middleware',
      middleware: cookieParser(secret)
    });

    return this;
  };

  Pronto.exports = function (settings) {
    return new Pronto(settings);
  };

  Pronto.exports.when = require('./When');

  Pronto.exports.Payload = function () {};

  Pronto.exports.payload = new Pronto.exports.Payload ();

  module.exports = Pronto.exports;

}();

