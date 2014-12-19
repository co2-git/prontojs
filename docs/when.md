`prontojs` When
=============

`when` is used to filter requests.

```js
// This will be applied to EVERY requests
server.greet();

// This will be applied ONLY to requests with the URL /
server.greet( when( '/' ) );
```

`when` has different properties for finer control:

```js
// This will be applied ONLY to requests made with the GET method
server.greet( when.method( 'GET' ) );
```

You can specify a reverse flag with `not`:

```js
// This will be applied ONLY to requests made with the GET method
server.greet( when.method.not( 'GET' ) );
```

You can stack filters with `and`:

```js
// This will be applied ONLY to requests made with the GET method
server.greet( when.method( 'GET' ).and.url( '/' ) );
```

You ca fine-grain stack filters with `or`:

```js
// This will be applied ONLY to requests made with the GET method
server.greet( when.method( 'GET' ).or.url( '/' ) );
```

# API

There are several ways you can call `when`:

```js
// when url
pronto().greet( when( '/' ) ); // same as when.url("/")

// when method
pronto().greet( when( 'get' ) ); // same as when.method("get")

// when environment
pronto().greet( when( 'dev' ) ); // same as when.env("NODE_ENV", "dev")

// when status
pronto().greet( when( 200 ) ); // same as when.status(200)

// when port
pronto().greet( when( 3000 ) ); // same as when.port(3000)

// when host
pronto().greet( when( { host: 'localhost' } ) ); // same as when.host("localhost")

// when https
pronto().greet( when( 'http' ) ); // same as when.protocol("http")

// when function
pronto().greet( when( function () {
    return new Date().getHours() > 8;
  } ) );
```

Using `not` would reverse the filter

```js


## when.dev

```js
// when env
pronto().greet( when.dev ); // same as when.env("NODE_ENV", "development")

// when method
pronto().greet( when( 'get' ) ); // same as when.method("get")
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

pronto().greet ( when.not.get( '/' ) );
// Sugar for:
pronto().greet ( when.method.not( 'get' ).and.url.not( '/' ) );
```

## when.post

```js
pronto().greet ( when.post );
// Sugar for:
pronto().greet ( when.method( 'post' ) );

pronto().greet ( when.post( '/' ) );
// Sugar for:
pronto().greet ( when.method( 'post' ).and.url.not( '/' ) );
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
