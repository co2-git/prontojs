! function () {

  'use strict';

  var facebook_strategy = require('passport-facebook').Strategy;

  exports.strategy = function (strategy) {

    var pronto = this;

    return function (req, res, next) {

      console.log('oh yeah! facebook');
      console.log('oh yeah! facebook');
      console.log('oh yeah! facebook');
      console.log('oh yeah! facebook');
      console.log('oh yeah! facebook');
      console.log('oh yeah! facebook');
      console.log('oh yeah! facebook');
      console.log('oh yeah! facebook');
      console.log('oh yeah! facebook');
      console.log('oh yeah! facebook');
      console.log('oh yeah! facebook');
      console.log('oh yeah! facebook');
      console.log('oh yeah! facebook');
      console.log('oh yeah! facebook');
      console.log('oh yeah! facebook');
      console.log('oh yeah! facebook');
      console.log('oh yeah! facebook');
      console.log('oh yeah! facebook');
      console.log('oh yeah! facebook');
      console.log('oh yeah! facebook');
      console.log('oh yeah! facebook');
      console.log('oh yeah! facebook');
      console.log('oh yeah! facebook');
      console.log('oh yeah! facebook');
      console.log('oh yeah! facebook');
      console.log('oh yeah! facebook');
      
      require('passport').use(new facebook_strategy(strategy, function onAccessToken (accessToken, refreshToken, profile, done) {

          pronto.emit('message', { 'got response from facebook': profile.id });

          strategy.associate(profile, {
            access: accessToken,
            refresh: refreshToken
          }, done);

          require('passport').authenticate('facebook')(req, res, next);

        }));
    }
  };

  exports.callback = function (strategy) {
    return function (req, res, next) {
      console.log('oh yeah! callback');
      console.log('oh yeah! callback');
      console.log('oh yeah! callback');
      console.log('oh yeah! callback');
      console.log('oh yeah! callback');
      console.log('oh yeah! callback');
      console.log('oh yeah! callback');
      console.log('oh yeah! callback');
      console.log('oh yeah! callback');
      console.log('oh yeah! callback');
      console.log('oh yeah! callback');
      console.log('oh yeah! callback');
      console.log('oh yeah! callback');
      console.log('oh yeah! callback');
      console.log('oh yeah! callback');
      console.log('oh yeah! callback');
      console.log('oh yeah! callback');
      return require('passport').authenticate('facebook',
        function (error, user, info) {
          if ( error ) {
            return next(error);
          }
          res.redirect(strategy.okUrl);
        });
    }
  };

  exports.ok = function (strategy) {
    return function (req, res, next) {
      res.send('boom');
      req.user = '';
      next();
    };
  };

} ();
