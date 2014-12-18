`prontojs` Configuration
======================

# Default

This is the default configuration object:

| Key | About | Type | Default | Accepted values |
| --- | ----- | ---- | ----- | --------------- |
| **port** | The port number to listen | Number | `process.env.PORT || 3000` | |
| **protocol** | The protocol to use | String | http | http, https |
| **view engine** | The template rendering engine | String | jade | |
| **views** | The directory where views reside | String | views | |

# Custom

These properties can be overwritten at boottime:

```js
pronto({ port: 4043, protocol: 'https' });
```
