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

Configuration can be passed in various ways to the constructor, all stackable. Examples:

```js
pronto( 8080 ); // Set port
pronto( { https: true } ); // Use HTTPS protocol
pronto( 'http://www.my-app.com' ) // URL shortcut
```

Read more about [Configuration](../../blob/master/docs/configuration.md)

## The file browser approach

The most basic role of a web server is to serve files. That's where `open()` comes in.

```js
// Make a file browserable
pronto().open( 'index.html' );

// Make a directory browserable
pronto().open( 'public/' );
```

### Openers

`prontojs` comes bundled with several openers, like the one for Jade:

```js
pronto().open( 'index.jade' ); // will be opened with the Jade opener
```

You can use another opener by forcing another content type:

```js
pronto().open( 'index.html', { as: 'text' } ); // open this file as plain text
```

### Open functions

You can also open functions:

```js
// foo.js
pronto().open(
    
  function (cb) {
    return [1, 2, 3];
  },
  
  { as: 'json' } ); // will return [1, 2, 3] with content type set to "application/json"
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

## Faster access to response actions

Response actions (`send`, `render`, `redirect`, etc) can be called directly from the server.

```js
// In express

app.use( function (req, res) {
  res.send( 'Hello world' );
});
  
// In pronto

pronto().send( 'Hello world' );
```

## Powerful filtering with `when`

You can pass filtering to most operations using `when`.

```js

/** Send "Welcome" .. */ 

pronto().send( 'Welcome',
  
  /** .. if .. */
  when
    
    /** .. method is POST and url is /sign/in */
    .post( '/sign/in' )
    
    /** .. and environment is development */
    .and.env( 'development' )
    
    /** .. and has signed cookie named "cookie123" */
    .and.signed.cookie( 'cookie123' )
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
