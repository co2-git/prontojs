`prontojs` When
=============

```js
// A simple extension we'll use for more readibility in our examples

pronto.extend.greet = function ( when ) {
  this.send( 'hello' );
};
```

# when

```js
pronto().greet( when( '/' ) );
// Sugar for:
pronto().greet ( when.url( '/' ) );
```

## when.dev

```js
pronto().greet( when.dev );
// Sugar for:
pronto().greet ( when.env( 'development' ) );
```

## when.development

```js
pronto().greet( when.development );
// Sugar for:
pronto().greet ( when.env( 'development' ) );
```

## when.is

### when.is.post

```js
pronto().greet ( when.is.post );
// Sugar for:
pronto().greet ( when.method( 'post' ) );
```
## when.get

```js
pronto().greet ( when.get );
// Sugar for:
pronto().greet ( when.method( 'get' ) );
```

## when.not

Reverse a when

```js
pronto().greet ( when.not( when( '/' ) ) );
// Same than:
pronto().greet ( when.url.not( '/' ) );
```

### when.not.get

```js
pronto().greet ( when.not.get );
// Sugar for:
pronto().greet ( when.method.not( 'get' ) );
```

## when.post

```js
pronto().greet ( when.post );
// Sugar for:
pronto().greet ( when.method( 'post' ) );
```

## when.production

As a silent function, it is a sugar for `when.request.environment("production")`.

```js
pronto().greet ( when.production );
// Sugar for:
pronto().greet ( when.env( 'production' ) );
```

## when.request

```js
pronto().greet ( when.request( '/' ) );
// Sugar for:
pronto().greet ( when.url( '/' ) );
```

### when.request.url

```js
pronto().greet ( when.request.url( '/' ) );
// Sugar for:
pronto().greet ( when.url( '/' ) );
```

#### when.request.url.is

```js
pronto().greet ( when.request.url.is( '/' ) );
// Sugar for:
pronto().greet ( when.url( '/' ) );
```

### when.request.method

```js
pronto().send ( when.request.method( 'POST' ) );
// Sugar for:
pronto().greet ( when.method( 'POST' ) );
```
