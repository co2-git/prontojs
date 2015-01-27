! function () {

  'use strict';

  var http = require('http');

  var path = require('path');

  var mime = require('mime');

  function /* Null */     prontoJS_openFileMethod (
    /* String */          file,
    /* Object */          opener,
    /* IncomingMessage */ req,
    /* ServerResponse */  res,
    /* Function */        next )
  {

    /** Parsing input arguments */

    for ( var i in arguments ) {
      if ( +i ) {
        if ( arguments[i] instanceof http.IncomingMessage ) {
          req = arguments[i];
        }
        else if ( arguments[i] instanceof http.ServerResponse ) {
          res = arguments[i];
        }
        else if ( typeof arguments[i] === 'object' ) {
          opener = arguments[i];
        }
      }
    }

    var pronto = this;

    var domain = require('domain').create();

    domain.on('error', function (error) {
      next(error);
    });

    domain.run(function () {

      opener = opener || {};

      var openWith = 'default';

      if ( opener['append extension'] ) {
        file += '.' + opener['append extension'];
      }

      if ( opener.with ) {
        openWith = opener.with;
      }

      var ext = opener.exec || file.split(/\./).pop();

      pronto.emitMessage('opening file', {
        file: file,
        ext: ext,
        with: openWith
      });

      function sendFile (isBuffer, prepend, append, replace) {
        var _data = [];

        if ( prepend ) {
          _data.push(new Buffer(prepend));
        }
          
        var stream = require('fs').createReadStream(file);

        stream.on('error', function (error) {
          if ( error.code === 'ENOENT' ) {
            return next();
          }
          return next(error);
        });

        stream.pipe(res);

        stream.on('end', function () {
          pronto.emitResponse(req, res, buf.length);
        });
      }

      if ( openWith === 'default' ) {
        switch ( ext ) {
          case 'js/callback':
            var fn = require(path.join(process.cwd(), file));

            var signature = opener.signature || [];

            if ( ! Array.isArray(signature) ) {
              signature = [signature];
            }

            signature = signature.map(function (arg) {
              if ( arg instanceof require('../Pronto').Payload ) {
                return req.body;
              }
            });
            
            signature.push(function (error, output) {
              if ( error ) {
                return next(error);
              }
              res.json(output);
            });
            
            fn.apply(null, signature);
            break;

          case 'js/middleware':
          case 'js/route':
            var fn = require(path.join(process.cwd(), file));
            
            fn(req, res, next);
            break;

          case 'html':
          case 'css':
          case 'js':
            
            if ( ext === 'js' ) {
              res.type('text/javascript; charset=utf-8');
            }

            else {
              res.type('text/' + ext + '; charset=utf-8');
            }

            sendFile(null, opener.prepend);

            break;

          case 'jade':
            
            res.type('text/html; charset=utf-8');

            var engine = require(path.join(process.cwd(), 'node_modules/' + ext));

            var locals = pronto.app.locals;

            for ( var i in res.locals ) {
              locals[i] = res.locals[i];
            }

            locals.pretty = pronto.app.get('env') === 'development';

            var rendered;

            try {
              rendered = engine.renderFile(path.join(process.cwd(), file), locals);
            }
            catch ( error ) {
              if ( error.code === 'ENOENT' ) {
                return next();
              }

              return next(error);
            }

            res.send(rendered);

            pronto.emitResponse(req, res, new Buffer(rendered, 'utf-8').length);

            break;
        
          default:
            res.type(mime.lookup(ext));
            sendFile();
            break;
        }
      }

      else {
        pronto.openers[openWith](file, req, res);
      }
    });

  }

  module.exports = prontoJS_openFileMethod;

} ();
