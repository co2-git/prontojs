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




                                                      
                                                                          
                              
                              
                      $$                            
                      $$                            
                      $$         $$$$$$    $$$$$$   
                      $$        $$    $$  $$    $$  
                      $$        $$    $$  $$    $$  
                      $$        $$    $$  $$    $$  
                      $$$$$$$$   $$$$$$    $$$$$$$  
                                                $$  
                                          $$    $$  
                                           $$$$$$                                 




  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                  



***/


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

    pronto.on('error', function (error) {
      Log.error(error);
    });

    pronto.on('message', function (message) {
      Log.message(message);
    });

    // pronto.on(404, function (resource) {
    //   Log.warn('not found', resource);
    // });

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

    switch ( request.method ) {
      case 'POST': methodColor = 'yellow'; break;
      case 'PUT': methodColor = 'magenta'; break;
      case 'DELETE': methodColor = 'red'; break;
    }

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
      (response.time.toString() + ' ms')[timeColor],
      response.size);
  }

  Log.success = function (event, message) {
    Log.main(event, message, 'green');
  };

  Log.warn = function (event, message) {
    Log.main(event, message, 'yellow');
  };

  Log.message = function (message) {
    Log.main('message', message, 'grey');
  };

  Log.error = function (error) {
    Log.main('error', {
      message: error.message,
      name: error.name,
      code: error.code,
      stack: error.stack && error.stack.split(/\n/)
    }, function (str) {
      return str.yellow.bgRed.bold;
    });
  };

  Log.main = function (event, message, eventColor) {
    eventColor = eventColor || 'white';

    var ev;

    if ( typeof eventColor === 'function' ) {
      ev = eventColor(event);
    }

    else {
      ev = event[eventColor]
    }

    var f = Log.format(message);

    if ( event === 'error' ) {
      f = JSON.stringify(message, null, 2).bgRed.white.bold;
    }

    console.log(Log.time(), ev, f);
  }

  Log.format = function (message, tab) {

    tab = tab || '';

    if ( typeof message === 'undefined' ) {
      return 'undefined'.magenta;
    }

    else if ( typeof message === 'string' ) {
      return message.cyan;
    }

    else if ( typeof message === 'number' ) {
      return message.toString().magenta;
    }

    else if ( typeof message === 'boolean' ) {
      return (message ? 'true'.green : 'false'.red).bold;
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
