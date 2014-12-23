module.exports = (function () {

  'use strict';

  var path = require('path');

  return (function openFile (file, opener, req, res, next) {
    
    for ( var i in arguments ) {
      if ( +i ) {
        if ( arguments[i] instanceof require('http').IncomingMessage ) {
          req = arguments[i];
        }
        else if ( arguments[i] instanceof require('http').ServerResponse ) {
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

        stream.on('data', function (data) {
          _data.push(data);
        });

        stream.on('end', function () {
          var buf = _data.join('');

          res.end(buf);

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

            var rendered = engine.renderFile(path.join(process.cwd(), file), locals);

            res.send(rendered);

            pronto.emitResponse(req, res, new Buffer(rendered, 'utf-8').length);

            break;
        
          case 'png':
            res.type('image/ico');
            sendFile(true);
            break;

          case 'woff':
            res.type('application/font-woff');
            sendFile(true);
            break;

          case 'ttf':
            res.type('application/x-font-ttf');
            sendFile(true);
            break;
        }
      }

      else {
        pronto.openers[openWith](file, req, res);
      }
    });
  });

})();
