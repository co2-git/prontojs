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
```

# Features

## Straight-forward

Bootstrapping a HTTP server is quite straight-forward. Just invoke the constructor like this:

```js
pronto();
// That's it! A HTTP server is now listening on default port and is ready to take connections
```

## Configurable

Configuration can be passed to the constructor.

```js
pronto( 8080, { https: true } ); // HTTPS server is now listening on port 8080
```

Read more about [Configuration](../../blob/master/docs/configuration.md)

## The file browser approach

The most basic role of a web server is to serve files. That's where `open()` comes in

```js
// Open a file
pronto().open ( 'index.html' );

// Open a file on a specific URL
pronto().open ( 'contact.html', when ( '/contact' ) );

// You can specify a custom opener
pronto().open ( 'index.jade', { with: 'jade' } );

// Custom openers can be set at configuration time
pronto({ 'open with': { '*.jade': 'jade' } )
  .open ( 'index.jade' );

// You can also open a directory
pronto().open ( 'public' );

// And specify an opener for the directory
pronto().open ( 'views', { with: 'jade' } );

// Some powerful openers
pronto().open.directory ( 'models', { with: 'modelWrapper' }, when ( '/models/:model' ) );
```

Read more about openers and how to create custom openers.

## Event-driven

`prontojs` inherits from `EventEmitter` and emits events such as:

| Event | Triggered |
|-------|-----------|
| **listening** | When HTTP server is listening and ready to take connections |
| **error** | When HTTP server encounters an error (at boottime or at runtime) |
| **request** | When HTTP server receives a request |
| **response** | When HTTP server emits a response |

You can see the complete list of events below in the Events section

## Quicker access to response actions

Response actions (`send`, `render`, `redirect`, etc) can be called directly from the server.

```js
// In express

app.use( function (req, res) {
  res.send( 'Hello world' );
});
  
// In pronto

pronto().send( 'Hello world' );
```

## Powerful filtering

You can pass filtering to most operations using `when`.

```js
// In express

app.post( '/sign/in', function (req, res) {
  res.send( 'Welcome' );
});
  
// In pronto

pronto().send( 'Welcome', when.post( '/sign/in' ) );
```

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
