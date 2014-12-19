module.exports = (function () {

  'use strict';

  return (function openDirectory (dir, opener, when) {
    
    for ( var i in arguments ) {
      if ( +i ) {
        if ( arguments[i] instanceof require('../When').Condition ) {
          when = arguments[i];
        }
        else if ( typeof arguments[i] === 'object' ) {
          opener = arguments[i];
        }
      }
    }

    if ( ! !!(when instanceof require('../When').Condition) ) {
      when = new (require('./When').Condition)(null, ['use']);
    }

    var pronto = this;

    this.buildMiddleware('open directory', when, function (req, res, next) {
      pronto.openFile(path.join(dir, req.path), req, res);
    });

  });

})();
