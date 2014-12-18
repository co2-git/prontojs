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

Read more about [Configuration](../../blob/master/docs/configuration.md)

## Open - Static servers

The most basic role of a web server is to serve local files by mapping a URL to a file path.

```js
// Open a file
pronto().open ( 'index.html' );

// You can also open a directory,
//    in which case URL will be mapped 
//    to a file from that directory
pronto().open ( 'public' );

// You can specify a mapping
pronto().open ( 'css', when('/css') );
// Or using route parameters
pronto().open ( 'pages/:page.html', when('/pages/:page') );
```

## Open - Templates and views

Template engines show a more advanced usage of `prontojs`, in which you can declare a 'open with' property.

```js
// Render HTML of index.jade
pronto().open ( 'index.jade', { with: 'jade' } );
```

A default "open with" can be set at configuration time:

```js
pronto( { "open with": { "*.jade": "jade" } ) )
  .open ( 'views/' );
```

## Open - Map to a function

Converting an HTTP request to parameters to pass to a JavaScript function and display the response of that function in JSON is tedious to write. The powerful `modelWrapper` takes care of that in one one-liner. 

```js
// In Express

app.get( '/api/models/User', function (req, res) {
  require( 'lib/models/User.js' )
    .find(req.query, function (error, found) {
      if ( error ) throw error;
      res.json(found);
    });
});

app.post( '/api/models/User', function (req, res) {
  require( 'lib/models/User.js' )
    .create(req.body, function (error, created) {
      if ( error ) throw error;
      res.json(created);
    });
});

app.put ( ... );
app.delete ( ... );

// With Pronto

pronto().open ( 'lib/models/User.js', { with: 'modelWrapper' }, when.url.is ( '/api/models/User' ) );
```

This can also be applied to a directory:

```js
pronto().open ( 'lib/models/:model.js', { with: 'functionMapper' }, when.url.is ( '/api/models/:model' ) );
```

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

`when` is really versatile and offers suppport for statcking filters based on routes - or other mechanisms (HTTP verb, environment, etc.).

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

Read more about [When](../../blob/master/docs/when.md)

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
