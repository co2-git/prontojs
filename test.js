// var routes = 

// pronto ()

//   .session  ({
//     secret: String,
//     store: Function
//   })

//   .passport ('local', 'facebook', 'twitter')

//   .monson   (when('/models'))

//   .favicon  (files.favicon)

//   .view    ('pages/terms-of-service',
//     when('/terms-of-service'))

//   .view    ('pages/navigator',
//     when.home)

//   .view   ('/templates/:template',
//     when('/templates/:template'))

//   .upload (when('/tools/upload'))

//  .open   ('/dist/', when.starts.with('js', 'css'))

//  .open   ('/bower_commponents/', when.starts.with('assets'))

// ;

var pronto = require('./lib/Pronto');

var when = pronto.when;

// STORY #1 | Creating a new HTTP daemon;

// pronto ();

// STORY #2 | Listening on "listening" event

pronto ()

  .on       ('listening', function (service) {
    console.log(service);
  })

  .send     ('home', when.home)

  .send     ('page 1', when({
    route: '/1'
  }))

  .send     ('page 2', when('/2'))

  .send     ('OK POST!', when({
    route: '/post',
    method: 'POST'
  }))

  .send     ('ERROR! MUST BE POST!', when({
    route: '/post'
  }));
