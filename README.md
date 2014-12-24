prontojs `alpha`
========

`prontojs` is a Node module that creates HTTP(S) daemons (*Web Servers*).

# Install

```bash
npm install prontojs
```

# Use

```js
var pronto = require('prontojs');
var when = pronto.when;
```

# Pitch

We take the angle of seeing web servers as resource handlers first. HTTP frameworks like `express.js` (*btw, `prontojs``is built on `express.js`*) takes the `Sinatra`'s approach of defining logics based on routing:

```js
var app = require('express')();

app.set('view engine', 'jade');
app.set('views', 'views');

// Rendering view
app.get('/views/:view', function (req, res) {
  res.render(req.params.view);
  });
  
// Logics
app.post('/do/:action', function (req, res, next) {
  require('./lib/' + req.params.action)(req.body, function (error, result) {
    if ( error) return next(error);
    res.json(result);
  });
  
// Static
app.use('/images', express.static('public/images'));
```

In Pronto.

```js

pronto()

// Rendering view
  
  .open('views/', { as: 'jade' }, when.prefix('/views/'));
  
// Logics
  .open('/lib/', { is: 'js/callback', as: 'json' }, when.prefix('/do/'))
  
// Static
  .open('/public', when('/images/'));
```

===

# Some user cases

### Want to start a new HTTP server?

```js
pronto();
/** 
    GET /

    HTTP 200 OK
    ...
*/
```

### Want to share a folder with the web?

```
/images
  /birthday.jpg
```

```js
pronto().open( 'images/' ); // Now all the files in images/ folder are served
/** 
    GET /birthday.jpg

    HTTP 200 OK
    ...
*/
```

### Want to restrict who you share it with?

```js
pronto().open( 'images/',
  
  when.visitor
    .is.a.registered.user.
    and
    .is.visiting.from('Russia').
    and
    .is.using.an.iPhone(4).
  and
    except.when.it.is.the.week.end);
```

### Want to execute your JS files via HTTP?

```js
// foo.js

module.exports = function () { return 'hello'; }

// pronto.js

pronto().exec ( 'foo.js', { as: 'text' } );
/** 
    GET /foo.js

    HTTP 200 OK
    Content-Type: text/plain; charset=utf-8
    
    hello
*/
```

===

# Open

`prontojs` puts the focus on serving files

```js
pronto().open ( 'index.html' );
/** 
    GET /index.html
    
    HTTP 200 OK
    Content-Type: text/html; charset=utf-8"
    
    ...
*/

pronto().open ( 'image.png' );
/** 
    GET /image.png
    
    HTTP 200 OK
    Content-Type: image/png
    
    ...
*/
```

## Open as

```js
pronto().open ( 'index.html', { as: 'txt' } );
/** 
    GET /index.html
    
    HTTP 200 OK
    Content-Type: text/plain; charset=utf-8
    
    ...
*/
```

We have built-in handlers for the more popular template engines:

```haml
//- index.jade

h1 Hello
```

```js
// pronto.js

pronto().open ( 'index.jade' );
/** 
    GET /index.jade
    
    HTTP 200 OK
    Content-Type: text/html; charset=utf-8
    
    <h1>Hello</h1>
*/
```

We have built-in handlers for the more popular preprocessors, for example SASS:

```css
/* index.scss */

$color: #999;

body { h1 { color: $color } }
```

```js
// pronto.js

pronto().open ( 'index.scss' );
/** 
    GET /index.scss
    
    HTTP 200 OK
    Content-Type: text/css; charset=utf-8
    
    body h1 { color: #999 }
*/
```

We have built-in handlers for the more popular interpreters:

```php
<?=PHP_VERSION
```

```js
pronto().open ( 'index.php' );
/** 
    GET /index.php
    
    HTTP 200 OK
    Content-Type: text/html; charset=utf-8
    
    3.2.1
*/
```

## Custom openers

You can build your custom openers:

```
index.txt
===
Hello John!
```

```js
function countOccurencies () {
  
}

pronto().open ( 'index.css', { with: function (stream) { /* your opener here */ } } );
```

## Custom types

You can build your custom types:

```js
pronto().type ( 'abc', function () { /* your opener here */  }  } );
```

## Open directories

Opening a directory automatically opens all the files in this directory. Imagine the following directory:

```
app/
  index.html
```

To serve this directory:

```js
pronto().open ( 'app/' );
```

```bash
curl http://localhost:3000/index.html # gets app/index.html
```

## Indexes

The example above could have been shorted to:

```bash
curl http://localhost:3000/ # gets app/index.html
```

When the route points to a directory, it will get the file matching globbing pattern `index.*`. If more than one file is found, first in the list is used.

```bash
curl http://localhost:3000/js # gets app/js/index.js
```

You can turn off indexes like this;

```js
pronto.open ( { index: false } )
```

Or you can specify your own index:

```js
pronto.open ( { index: 'README.md' } );
```

This is the one we use as default:

```js
pronto.open ( { index: 'index.*' } );
```

# Exec

As seen before, some file extensions are automatically opened as executable:

```js
pronto.open( 'index.py' ); // execute this file with Python
```

JS files are opened as static JS files:

```js
pronto.open( 'index.js' );
/**
    GET /index.js
    
    HTTP 200 OK
    Content-Type: text/javascript; charset=utf-8
```

If you want to open a JS file with Node or IO, do like this:

```js
// morning.js

module.exports = function () {
  return "Good morning";
  };

pronto.exec( 'morning.js', when.time.is( 'AM' ) );
/**
    GET /index.js
    
    HTTP 200 OK
    Content-Type: text/javascript; charset=utf-8
```

You have flexible support

# Passport

We have passport.js for auth

```js
pronto().passport({ strategies: ['local', 'facebook', 'twitter', 'google+', 'linkedin', 'github'] });
```

## Local strategy

```
POST /sign/in email=john@doe.com&password=1234

HTTP 200 OK
Content-Type: application/json; charset=utf-8
Cookie: ...

{ "welcome": User }
```
