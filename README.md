prontojs `alpha`
========

Web Server focusing on serving content rather than map routes with functions.

# Install

```bash
npm install prontojs
```

```js
var pronto = require('prontojs');
var when = pronto.when;
```

===

### Want to start a new HTTP server?

```js
pronto();
```

### Want to share a folder with the web?

```js
pronto().open( 'images/' );
```

### Want to restrict who you share it with?

```js
pronto().open( 'images/',
  when.visitor
    .is.a.registered.user.
    and
    .is.visiting.from('Thaïland').
    and
    .is.using.an.iPhone(4).
  and
    except.when.it.is.the.week.end);
```

### Want to execute your JS files via HTTP?

```js
pronto().exec ( 'lib/my-file.js' );
```

===

# Open

`prontojs` puts the focus on serving files

```js
pronto().open ( 'index.html' );
// This will serve "index.html" with the content-type "text/html; charset=utf-8"
pronto().open ( 'face.png' );
// Works also with binary files
```

You can specify the content-type

```js
pronto().open ( 'index.html', { as: 'txt' } );
// index.html will now be served as a text
```

We have built-in handlers for the more popular template engines:

```js
pronto().open ( 'index.jade' );
// will be rendered into HTML
```

We have built-in handlers for the more popular preprocessors:

```js
pronto().open ( 'index.scss' ); // will be rendered into CSS
pronto().open ( 'index.less' ); // will be rendered into CSS
pronto().open ( 'index.cs' ); // will be rendered into JS
```

We have built-in handlers for the more popular interpreters:

```js
pronto().open ( 'index.php' ); // will be executed with the PHP interpreter
pronto().open ( 'index.rb' ); // will be executed with the Ruby
pronto().open ( 'index.py' ); // will be executed with the Python interpreter
```

## Custom openers

You can build your custom openers:

```js
pronto().open ( 'file.txt', { with: function (stream) { /* your opener here */ } } );
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
