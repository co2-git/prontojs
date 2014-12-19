module.exports = (function () {

  'use strict';

  var path = require('path');

  return (function openFile (file, opener, req, res) {
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

    var ext = 'html';

    if ( /\.jade$/.test(file) ) {
      ext = 'jade';
    }

    switch ( ext ) {
      case 'html':
        
        res.type(ext);
        
        require('fs').createReadStream(file)
          .pipe(res);

        break;

      case 'jade':
        
        res.type('html');

        var engine = require(path.join(process.cwd(), 'node_modules/' + ext));

        var locals = pronto.app.locals;

        for ( var i in res.locals ) {
          locals[i] = res.locals[i];
        }

        var rendered = engine.renderFile(path.join(process.cwd(), file), locals);

        res.send(rendered);

        break;
    }

    this.emitResponse(req, res);
  });

})();
