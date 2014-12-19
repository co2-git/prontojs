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

- Based on Express, Connect and Node's HTTP module
- Short-hand syntax
- Event-driven
- Focus on serving files
- Powerful and versatile filter syntax
- Built-in with the most useful modules such as Passport or SocketIO

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

## The "Open File" approach

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
    
  function () {
    return [1, 2, 3];
  },
  
  { as: 'json' } ); // will return [1, 2, 3] with content type set to "application/json"
```

Read more about openers and how to create custom openers.

## Powerful filtering with `when`

You can pass filtering to most operations using `when`.

```js
// Use `when` to filter by routes
pronto().open( 'html/contact.html', when( '/pages/contact.html' ));

// which could be batched by opening directly the directory
pronto().open( 'html/', when( '/pages' ) );

// `when` offers powerful filtering
pronto().open( 'html/', when( '/pages' ).and.cookie( '123' ).and.not.post );
```

Read more about [When](../../blob/master/docs/when.md)

## Event-driven

`prontojs` inherits from `EventEmitter` and emits events such as:

| Event | Triggered |
|-------|-----------|
| **listening** | When HTTP server is listening and ready to take connections |
| **error** | When HTTP server encounters an error (at boottime or at runtime) |
| **request** | When HTTP server receives a request |
| **response** | When HTTP server emits a response |

You can see the complete list of events below in the Events section

## Express compatible

You can still use Express calling the `app` property:

```js
var server = pronto();

var app = server.app;

// Now you can interact directly with Express ...

app.locals.message = 'Hello world';

app.get('/', function (req, res) {
  res.send(app.locals.message);
};
```