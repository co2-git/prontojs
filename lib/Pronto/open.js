module.exports = (function () {

  'use strict';

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
      var stat = require('fs').statSync(file);
      
      if ( stat.isFile() ) {
        this.buildMiddleware('open file', when, function (req, res, next) {
          pronto.openFile(file, opener, req, res);
        });
      }

      else if ( stat.isDirectory() ) {
        this.openDirectory(file, opener, when);
      }
    }

    return this;
  });

})();
