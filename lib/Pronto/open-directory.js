module.exports = (function () {

  'use strict';

  var path = require('path');

  /**
   *  @method   Pronto.openDir
   */

  return (function openDirectory (dir) {

    var opener, when;
    
    for ( var i in arguments ) {
      if ( +i ) {
        if ( arguments[i] instanceof require('../When').Condition ) {
          var when = arguments[i];
        }
        else if ( typeof arguments[i] === 'object' ) {
          var opener = arguments[i];
        }
      }
    }

    if ( ! opener ) {
      opener = {};
    }

    if ( ! !!(when instanceof require('../When').Condition) ) {
      when = new (require('../When').Condition)(null, ['use']);
    }

    var pronto = this;

    this.buildMiddleware(
      'open directory',

      when,
      
      { directory: dir, type: 'use', opener: opener },
      
      function prontoJS_openDirectoryMiddleware (req, res, next) {

        var filepath = req.originalUrl;

        if ( when.isPrefix ) {
          filepath = req.url;
        }

        filepath = filepath.replace(/\?.+$/, '');

        if ( filepath === '/' ) {
          require('glob')(path.join(dir, (opener.index || 'index.*')),
            function (error, files) {
              if ( error ) {
                return cb(error);
              }

              if ( ! files.length ) {
                return cb();
              }

              pronto.openFile(files[0], opener, req, res, next);
            });
        }

        else {
          pronto.openFile(path.join(dir, filepath), opener, req, res, next);
        }
      });

  });

})();
