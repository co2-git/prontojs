prontojs `alpha`
========

Web

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

---
