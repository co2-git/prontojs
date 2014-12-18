prontojs `alpha`
========

Web server based on Express

# Install

```bash
npm install prontojs
```

# Require

```js
var pronto = require('prontojs');
var when = pronto.when;
```

# Features

## Straight-forward

Bootstrapping a HTTP server is quite straight-forward. Just invoke the constructor like this:

```js
pronto (); // That's it!
```

## Configurable

Configuration is passed to the constructor.

```js
pronto({ port: 8474 }); // HTTP server is now listening on port 8474
```

Read more about [Configuration](../../tree/docs/configuration.md)

## Event-driven

`prontojs` inherits from `EventEmitter` and emits events such as:

| Event | Triggered |
|-------|-----------|
| **listening** | When HTTP server is listening and ready to take connections |
| **error** | When HTTP server encounters an error (at boottime or at runtime) |
| **request** | When HTTP server receives a request |
| **response** | When HTTP server emits a response |

You can see the complete list of events below in the Events section

## Direct access to response actions from the app

`prontojs` offers an interface to Express when the type of actions the HTTP server can perform (`send`, `render`, `redirect`, etc) are properties of the app server instead of being properties only of the HTTP response.

```js
// In express

app.use(function (req, res) {
  res.send('Hello world');
});
  
// In pronto

pronto().send('Hello world');
```

## Route filtering

You can use routes also (using the same syntax than Express) by invoking `when`.

```js
// In express

app.get('/hello', function (req, res) {
  res.send('Hello world');
});
  
// In pronto

pronto().send('Hello world', when('/hello'));
```

## Any filtering

`when` is really versatile and offers suppport for statcking filters based on routes - or other mechanisms (HTTP verb, environment, etc.). See more in the `when` section.

```js
// can you guess what this does? :)

pronto().send('I am fine',
  
  when
    
    .url.is('/question/how-are-you', '/question/are-you-fine')
    
    .and.method.is('post', 'put')
    
    .and.payload.has.Number('token')
    
    .and.environment.is('production')
);
```

## View and template

`prontojs` uses Jade by default and `views` as the default views directory. You can change that in configuration.

```js
pronto().render('home', when.home);
// it will render 'views/home.jade' when '/' is called
```

## Express compatible

You can still use Express calling the `express` property:

```js
pronto()
  .express(function (app) {
    
    // Now you interact directly with Express ...
    
    app.locals.message = 'Hello world';
  
    app.get('/', function (req, res) {
      res.send(app.locals.message);
    };
  });
```

## Easy to serve static file

You can serve specific files with `open`:

```js
pronto().open ( 'index.html', when.home );
// Will serve the file index.html when request is GET /
```

Or pinpoint a directory to a route prefix

```js
pronto().browse ( 'assets/css', when ('/css') );
// Will serve the file assets/css/main.css if request is GET /css/main.css
```

## HTTP JSON API made easy

```js
pronto()
  .monson ( '/:model/:action?'/ );
```

## True to HTTP

```js
pronto

  // Streaming
  .stream ( 'video.mp4', when('/watch') )
  
  // Uploading files
  .upload ( when('/upload') )
  
  // IP Ban
  .ipBan ( [IP] )
  
  // IP Restrict
  .ipRestrict ( [IP] )
  
  // Cookies
  .createCookie ( 'cookie-name', { value: 123 }, when.success('sign in'))
  
  // Cookie control
  .view ( 'home', when.home.and.has.cookie('cookie-name') )
  
  // Session
  .session ( { value: 123 } )
  
  // Session control
  .send ( 'Welcome registered user', when.has.session( { value: 123 } ) )
```
  
