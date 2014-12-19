module.exports = (function () {
  
  'use strict';

  require('colors');

  if ( ! process.send ) {
    process.send = console.log.bind(console);
  }

  function Log (pronto) {

    pronto.on('listening', function (service) {
      Log.success('listening', service);
    });

    pronto.on('request', function (request) {
      Log.request(request);
    });

    pronto.on('response', function (response) {
      Log.response(response);
    });

    pronto.on(404, function (resource) {
      Log.warn('not found', resource);
    });

  }

  Log.time = function () {
    var d = new Date();

    var h = d.getHours();

    if ( h < 10 ) {
      h = '0' + h;
    }

    var m = d.getMinutes();

    if ( m < 10 ) {
      m = '0' + m;
    }

    var s = d.getSeconds();

    if ( s < 10 ) {
      s = '0' + s;
    }

    return '[' + (h + ':' + m + ':' + s).grey + ']';
  }

  Log.request = function (request) {

    var methodColor = 'blue';

    console.log(Log.time(), '...'.grey, request.method.bold[methodColor], request.url);
  }

  Log.response = function (response) {

    var statusColor = 'green';

    if ( response.status.toString()[0] === '1' ) {
      statusColor = 'grey';
    }

    if ( response.status.toString()[0] === '3' ) {
      statusColor = 'cyan';
    }

    if ( response.status.toString()[0] === '4' ) {
      statusColor = 'yellow';
    }

    if ( response.status.toString()[0] === '5' ) {
      statusColor = 'red';
    }

    var methodColor = 'blue';

    var timeColor = 'grey';

    if ( response.time > 1000 ) {
      timeColor = 'white';
    }

    if ( response.time > 2000 ) {
      timeColor = 'yellow';
    }

    if ( response.time > 3000 ) {
      timeColor = 'red';
    }

    console.log(Log.time(),
      response.status.toString()[statusColor],
      response.method.bold[methodColor],
      response.url,
      (response.time.toString() + ' ms')[timeColor]);
  }

  Log.success = function (event, message) {
    Log.main(event, message, 'green');
  };

  Log.warn = function (event, message) {
    Log.main(event, message, 'yellow');
  };

  Log.main = function (event, message, eventColor) {
    eventColor = eventColor || 'white';

    console.log(Log.time(), event[eventColor], Log.format(message));
  }

  Log.format = function (message, tab) {

    tab = tab || '';

    if ( typeof message === 'string' ) {
      return message.cyan;
    }

    else if ( typeof message === 'number' ) {
      return message.toString().magenta;
    }

    else if ( typeof message === 'boolean' ) {
      return message.toString().purple;
    }

    else if ( Array.isArray(message) ) {

      var f = '[ ';

      tab += "  ";

      message.forEach(function (item, i) {
        f += "\n" + tab + ('#' + i + ' ').bold.grey + Log.format(item, tab);
      });

      tab = tab.replace(/  /, '');

      f += ' ]';

      return f;
    }

    else if ( typeof message === 'object' ) {

      var f = '{ ';

      tab += "  ";

      for ( var i in message ) {
        f += "\n" + tab + (i + ': ').bold.blue + Log.format(message[i], tab);
      }

      tab = tab.replace(/  /, '');

      f += ' }';

      return f;
    }
  }

  return Log;

})();
