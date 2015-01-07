! function () {

  'use strict';

  var facebook_strategy = require('passport-facebook').Strategy;

  exports.strategy = function (strategy) {

    var pronto = this;

    return function (req, res, next) {
      
      require('passport').use(new facebook_strategy(strategy, function onAccessToken (accessToken, refreshToken, profile, done) {

          pronto.emit('message', { 'got response from facebook': profile.id });

          strategy.associate(profile, {
            access: accessToken,
            refresh: refreshToken
          }, done);

        }));

      next();
    }
  };

} ();