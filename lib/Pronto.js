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

  /***

   _______                                  __               
  /       \                                /  |              
  $$$$$$$  | ______    ______   _______   _$$ |_     ______  
  $$ |__$$ |/      \  /      \ /       \ / $$   |   /      \ 
  $$    $$//$$$$$$  |/$$$$$$  |$$$$$$$  |$$$$$$/   /$$$$$$  |
  $$$$$$$/ $$ |  $$/ $$ |  $$ |$$ |  $$ |  $$ | __ $$ |  $$ |
  $$ |     $$ |      $$ \__$$ |$$ |  $$ |  $$ |/  |$$ \__$$ |
  $$ |     $$ |      $$    $$/ $$ |  $$ |  $$  $$/ $$    $$/ 
  $$/      $$/        $$$$$$/  $$/   $$/    $$$$/   $$$$$$/  
                                                             
                                                             
                                                             
    ______   __                              
   /      \ /  |                             
  /$$$$$$  |$$ |  ______    _______  _______ 
  $$ |  $$/ $$ | /      \  /       |/       |
  $$ |      $$ | $$$$$$  |/$$$$$$$//$$$$$$$/ 
  $$ |   __ $$ | /    $$ |$$      \$$      \ 
  $$ \__/  |$$ |/$$$$$$$ | $$$$$$  |$$$$$$  |
  $$    $$/ $$ |$$    $$ |/     $$//     $$/ 
   $$$$$$/  $$/  $$$$$$$/ $$$$$$$/ $$$$$$$/  
                                             
                                             
                                             

  ***/

  var path = require('path');

  var express = require('express');

  /***
                                  
                                    
                                    
                                    
  $$$$$$$    $$$$$$   $$   $$   $$  
  $$    $$  $$    $$  $$   $$   $$  
  $$    $$  $$$$$$$$  $$   $$   $$  
  $$    $$  $$        $$   $$   $$  
  $$    $$   $$$$$$$   $$$$$ $$$$   
                                    
                                    
  ***/

  function Pronto (settings) {

    settings = settings || {};

    var pronto = this;

    this.port = settings.port || process.env.PORT || 3000;

    this.protocol = settings.protocol || 'http';

    this.root = settings.root || process.cwd();

    this.middlewares = [];

    this.express = express;

    this.app = express();

    this.beforeStarting = [];

    this.openers = {};

    require('./Log')(this);

    this.domain = require('domain').create();

    this.domain.on('error', function (error) {
      console.log('!!!!! Pronto Domain Error');
      pronto.emit('error', error);
    });

    process.nextTick(function () {

      pronto.on('error', function (error) {
        // ...
      });

      pronto.start();
    });
  }

  /***

                                                                     
                                                                     
  $$            $$                            $$    $$               
                $$                                  $$               
  $$  $$$$$$$   $$$$$$$    $$$$$$    $$$$$$   $$  $$$$$$    $$$$$$$  
  $$  $$    $$  $$    $$  $$    $$  $$    $$  $$    $$     $$        
  $$  $$    $$  $$    $$  $$$$$$$$  $$        $$    $$      $$$$$$   
  $$  $$    $$  $$    $$  $$        $$        $$    $$  $$       $$  
  $$  $$    $$  $$    $$   $$$$$$$  $$        $$     $$$$  $$$$$$$   
                                                                   

  ***/                                                        
                                                                   

  require('util').inherits(Pronto, require('events').EventEmitter);

  /***

                                                    
                                                    
              $$                            $$      
              $$                            $$      
   $$$$$$$  $$$$$$     $$$$$$    $$$$$$   $$$$$$    
  $$          $$            $$  $$    $$    $$      
   $$$$$$     $$       $$$$$$$  $$          $$      
        $$    $$  $$  $$    $$  $$          $$  $$  
  $$$$$$$      $$$$    $$$$$$$  $$           $$$$   
                                                    
                                                    
  ***/                                                    

  Pronto.prototype.start = require('./Pronto/start');

  /***

                                                            
                                                              
                                                              
                                                              
   $$$$$$    $$$$$$    $$$$$$   $$$$$$$    $$$$$$    $$$$$$   
  $$    $$  $$    $$  $$    $$  $$    $$  $$    $$  $$    $$  
  $$    $$  $$    $$  $$$$$$$$  $$    $$  $$$$$$$$  $$        
  $$    $$  $$    $$  $$        $$    $$  $$        $$        
   $$$$$$   $$$$$$$    $$$$$$$  $$    $$   $$$$$$$  $$        
            $$                                                
            $$                                                
            $$                                                

  ***/

  Pronto.prototype.opener = function (name, fn) {
    this.openers[name] = fn;

    return this;
  };

  /***

                                
                                
                                
  $$    $$   $$$$$$$   $$$$$$   
  $$    $$  $$        $$    $$  
  $$    $$   $$$$$$   $$$$$$$$  
  $$    $$        $$  $$        
   $$$$$$   $$$$$$$    $$$$$$$  
                                
                                
  ***/                         

  Pronto.prototype.use = function (middleware) {
    this.middlewares.push({
      type: 'use',
      middleware: middleware
    });

    return this;
  };

  /***

                                          
                                        
  $$                  $$  $$        $$  
  $$                      $$        $$  
  $$$$$$$   $$    $$  $$  $$   $$$$$$$  
  $$    $$  $$    $$  $$  $$  $$    $$  
  $$    $$  $$    $$  $$  $$  $$    $$  
  $$    $$  $$    $$  $$  $$  $$    $$  
  $$$$$$$    $$$$$$   $$  $$   $$$$$$$  
                                        
                                        
                                        
                                                      
                                                      
                $$        $$        $$  $$            
                          $$        $$  $$            
  $$$$$$ $$$$   $$   $$$$$$$   $$$$$$$  $$   $$$$$$   
  $$   $$   $$  $$  $$    $$  $$    $$  $$  $$    $$  
  $$   $$   $$  $$  $$    $$  $$    $$  $$  $$$$$$$$  
  $$   $$   $$  $$  $$    $$  $$    $$  $$  $$        
  $$   $$   $$  $$   $$$$$$$   $$$$$$$  $$   $$$$$$$  
                                                      
                                                      
                                                      
                                              
                                              
                                              
                                              
  $$   $$   $$   $$$$$$    $$$$$$    $$$$$$   
  $$   $$   $$        $$  $$    $$  $$    $$  
  $$   $$   $$   $$$$$$$  $$        $$$$$$$$  
  $$   $$   $$  $$    $$  $$        $$        
   $$$$$ $$$$    $$$$$$$  $$         $$$$$$$  
                                              
                                              
                                              
  ***/

  Pronto.prototype.buildMiddleware = require('./Pronto/build-middleware');

  /***

                                        
                                        
                          $$    $$      
                                $$      
   $$$$$$   $$$$$$ $$$$   $$  $$$$$$    
  $$    $$  $$   $$   $$  $$    $$      
  $$$$$$$$  $$   $$   $$  $$    $$      
  $$        $$   $$   $$  $$    $$  $$  
   $$$$$$$  $$   $$   $$  $$     $$$$   
                                        
                                        
                                                                        
                                                                        
                                                                $$      
                                                                $$      
   $$$$$$    $$$$$$    $$$$$$   $$    $$   $$$$$$    $$$$$$$  $$$$$$    
  $$    $$  $$    $$  $$    $$  $$    $$  $$    $$  $$          $$      
  $$        $$$$$$$$  $$    $$  $$    $$  $$$$$$$$   $$$$$$     $$      
  $$        $$        $$    $$  $$    $$  $$              $$    $$  $$  
  $$         $$$$$$$   $$$$$$$   $$$$$$    $$$$$$$  $$$$$$$      $$$$   
                            $$                                          
                            $$                                          
                            $$                                                                           
  ***/

  Pronto.prototype.emitRequest = function (req) {
    this.emit('request', {
      method: req.method,
      url: req.originalUrl
    });
  };

  /***

                                        
                                        
                          $$    $$      
                                $$      
   $$$$$$   $$$$$$ $$$$   $$  $$$$$$    
  $$    $$  $$   $$   $$  $$    $$      
  $$$$$$$$  $$   $$   $$  $$    $$      
  $$        $$   $$   $$  $$    $$  $$  
   $$$$$$$  $$   $$   $$  $$     $$$$   
                                        
                                        

                                
                                
   $$$$$$    $$$$$$    $$$$$$$  
  $$    $$  $$    $$  $$        
  $$        $$$$$$$$   $$$$$$   
  $$        $$              $$  
  $$         $$$$$$$  $$$$$$$                                                  

                                                    
                                                    
                                                    
                                                    
   $$$$$$    $$$$$$   $$$$$$$    $$$$$$$   $$$$$$   
  $$    $$  $$    $$  $$    $$  $$        $$    $$  
  $$    $$  $$    $$  $$    $$   $$$$$$   $$$$$$$$  
  $$    $$  $$    $$  $$    $$        $$  $$        
  $$$$$$$    $$$$$$   $$    $$  $$$$$$$    $$$$$$$  
  $$                                                
  $$                                                
  $$                                                


  ***/

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

  /***

                                        
                                        
                          $$    $$      
                                $$      
   $$$$$$   $$$$$$ $$$$   $$  $$$$$$    
  $$    $$  $$   $$   $$  $$    $$      
  $$$$$$$$  $$   $$   $$  $$    $$      
  $$        $$   $$   $$  $$    $$  $$  
   $$$$$$$  $$   $$   $$  $$     $$$$   
                                        
                                                                         
                                                                           
                                                                           
                                                                           
  $$$$$$ $$$$    $$$$$$    $$$$$$$  $$$$$$$   $$$$$$    $$$$$$    $$$$$$   
  $$   $$   $$  $$    $$  $$       $$              $$  $$    $$  $$    $$  
  $$   $$   $$  $$$$$$$$   $$$$$$   $$$$$$    $$$$$$$  $$    $$  $$$$$$$$  
  $$   $$   $$  $$              $$       $$  $$    $$  $$    $$  $$        
  $$   $$   $$   $$$$$$$  $$$$$$$  $$$$$$$    $$$$$$$   $$$$$$$   $$$$$$$  
                                                             $$            
                                                       $$    $$            
                                                        $$$$$$                                                                                   
  ***/

  Pronto.prototype.emitMessage = function (label, message) {
    var obj = {};

    obj[label] = message;

    this.emit('message', obj);
  };

  /***

                                        
                                        
                          $$    $$      
                                $$      
   $$$$$$   $$$$$$ $$$$   $$  $$$$$$    
  $$    $$  $$   $$   $$  $$    $$      
  $$$$$$$$  $$   $$   $$  $$    $$      
  $$        $$   $$   $$  $$    $$  $$  
   $$$$$$$  $$   $$   $$  $$     $$$$   
                                        
                                        
                                                  
                                                    
                                                    
                                                    
   $$$$$$    $$$$$$    $$$$$$    $$$$$$    $$$$$$   
  $$    $$  $$    $$  $$    $$  $$    $$  $$    $$  
  $$$$$$$$  $$        $$        $$    $$  $$        
  $$        $$        $$        $$    $$  $$        
   $$$$$$$  $$        $$         $$$$$$   $$        
                                                    
                                                    
                                                                                                                            
  ***/

  Pronto.prototype.emitError = function (error) {
    this.emit('error', {
      name: error.name,
      message: error.message,
      code: error.code,
      stack: (error.stack || '').split(/\n/)
    });
  };

  /***


                                      $$  
                                      $$  
   $$$$$$$   $$$$$$   $$$$$$$    $$$$$$$  
  $$        $$    $$  $$    $$  $$    $$  
   $$$$$$   $$$$$$$$  $$    $$  $$    $$  
        $$  $$        $$    $$  $$    $$  
  $$$$$$$    $$$$$$$  $$    $$   $$$$$$$  
                                          
                                          
                                          
  ***/

  Pronto.prototype.send = function (message) {

    var conditions = Array.prototype.slice.call(arguments);

    conditions.shift();

    this.buildMiddleware(conditions, function (req, res, next) {
      res.send(message);
    });

    return this;
  };

  /***

                                         
                                         
             $$                          
                                         
  $$     $$  $$   $$$$$$   $$   $$   $$  
   $$   $$   $$  $$    $$  $$   $$   $$  
    $$ $$    $$  $$$$$$$$  $$   $$   $$  
     $$$     $$  $$        $$   $$   $$  
      $      $$   $$$$$$$   $$$$$ $$$$   
                                         
                                         
  ***/

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

  /***

                                                                            
                                                                            
                            $$  $$                                  $$      
                            $$                                      $$      
   $$$$$$    $$$$$$    $$$$$$$  $$   $$$$$$    $$$$$$    $$$$$$$  $$$$$$    
  $$    $$  $$    $$  $$    $$  $$  $$    $$  $$    $$  $$          $$      
  $$        $$$$$$$$  $$    $$  $$  $$        $$$$$$$$  $$          $$      
  $$        $$        $$    $$  $$  $$        $$        $$          $$  $$  
  $$         $$$$$$$   $$$$$$$  $$  $$         $$$$$$$   $$$$$$$     $$$$   
                                                                            
                                                                            
  ***/

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

  /***

                                          
                                          
                                          
   $$$$$$    $$$$$$    $$$$$$   $$$$$$$   
  $$    $$  $$    $$  $$    $$  $$    $$  
  $$    $$  $$    $$  $$$$$$$$  $$    $$  
  $$    $$  $$    $$  $$        $$    $$  
   $$$$$$   $$$$$$$    $$$$$$$  $$    $$  
            $$                            
            $$                            
            $$                            


  ***/

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

  Pronto.prototype.passport = function (options) {

    var passport = require('passport');

    passport.serializeUser(options.serialize);

    passport.deserializeUser(options.deserialize);

    this.middlewares.push({
      type: 'use',
      name: 'passport.js',
      middleware: passport.initialize()
    });

    for ( var strategy in options.strategies ) {
      switch ( strategy ) {
        case 'facebook':
          var facebook = require('./Pronto/passport/facebook');

          this.middlewares.push({
            type: 'use',
            name: 'passport.js - Facebook Strategy',
            routes: [options.strategies.facebook.url],
            middleware: facebook.strategy.apply(this,
              [options.strategies.facebook])
          });

          // this.middlewares.push({
          //   type: 'use',
          //   name: 'passport.js - Facebook Authenticate',
          //   routes: [options.strategies.facebook.url],
          //   middleware: passport.authenticate('facebook')
          // });

          this.middlewares.push({
            type: 'use',
            name: 'passport.js - Facebook Callback',
            routes: [options.strategies.facebook.callbackURL],
            middleware: facebook.callback.apply(this,
              [options.strategies.facebook])
          });

          this.middlewares.push({
            type: 'use',
            name: 'passport.js - Facebook Auth OK',
            routes: [options.strategies.facebook.okURL],
            middleware: facebook.ok.apply(this,
              [options.strategies.facebook])
          });

          break;
      }
    }

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

