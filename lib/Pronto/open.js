module.exports = (function () {

  'use strict';

  var path = require('path');

  return (function open (file, opener, when) {
    if ( ! when && opener instanceof require('../When').Condition ) {
      when = opener;
      opener = {};
    }

    if ( ! when && ! opener ) {
      opener = {};
    }

    var pronto = this;

    if ( typeof file === 'string' ) {
      var stat = require('fs').statSync(path.join(this.root, file));
      
      if ( stat.isFile() ) {
        this.buildMiddleware('open file',
          when,
          {
            file: file
          },
          function (req, res, next) {
            pronto.openFile(file, opener, req, res, next);
          });
      }

      else if ( stat.isDirectory() ) {
        this.openDirectory(file, opener, when);
      }
    }

    else if ( typeof file === 'function' ) {
      this.buildMiddleware('custom ' + (file.name || 'anonymous'),
        when,
        {},
        file);
    }

    return this;
  });

})();
