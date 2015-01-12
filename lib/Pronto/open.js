! function () {

  'use strict';

  var path = require('path');
  var When = require('../When');

  function /*this*/ open (/*String*/file, /*Object*/opener, /*When...*/when) {

    var whens = [];

    for ( var i in arguments ) {
      if ( arguments[i] instanceof When.Condition ) {
        whens.push(arguments[i]);
      }
      else if ( arguments[i].constructor === Object ) {
        opener = arguments[i];
      }
    }

    var pronto = this;

    if ( typeof file === 'string' ) {
      var stat = require('fs').statSync(path.join(this.root, file));
      
      if ( stat.isFile() ) {
        this.buildMiddleware('open file',
          whens,
          {
            file: file
          },
          function prontoJS_openFileMiddleware (req, res, next) {
            pronto.openFile(file, opener, req, res, next);
          });
      }

      else if ( stat.isDirectory() ) {
        this.openDirectory(file, opener, when);
      }
    }

    else if ( typeof file === 'function' ) {
      this.buildMiddleware((file.name || 'custom anonymous'),
        whens,
        {},
        file);
    }

    return this;
  }

  module.exports = open;

} ();
