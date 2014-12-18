`prontojs` When
=============

# As a function

As a function, it is a sugar for `when.request.url`.

```js
// This
pronto().send ( new Date(), when ( '/what/time/is/it' ) );

// ... is the same than this
pronto().send ( new Date(), when.request.url ( '/what/time/is/it' ) );
```

# request

As a function, it is a sugar for `when.request.url`.

```js
// This
pronto().send ( 1 + 1, when.request ( '/how/much/is/1+1' ) );

// ... is the same than this
pronto().send ( 1 + 1, when.request.url ( '/how/much/is/1+1' ) );
```

## request.url

As a function, it adds a route filter

```js
// Pronto
pronto().send ( 42, when.request.url ( '/what-is-the-answer-to-everything' ) );

// Express
app.use ( '/what-is-the-answer-to-everything', function (req, res) {
  return res.send(42);
  });
```

### request.url.is

As a function, it is a sugar for `when.request.url`

```js
// This
pronto().send ( pronto.url, when.request.url.is ( '/echo' ) );

// ... is the same than this
pronto().send ( pronto.url, when.request.url ( '/echo' ) );
```

## request.method

As a function, it sets the method.

```js
// Pronto
pronto().send ( 'POST not authorized', when.request.method ( 'POST' ) );

// Express
app.post ( function (req, res) {
  return res.send('POST not authorized');
  });
```
