# express-list-middleware
List middleware used in Express or express based framework loopback / sails. It would be handy when you got lots middleware in your stack.

Hopefully this package would save you some time locating bad middleware or resolving issues due to the order of the stack.

See also [express-repl-tookit](https://www.npmjs.com/package/express-repl-toolkit) if you are trying to debug / or play express as in a playground.

## Useage:
For debugging express apps.
Takes a booted express.js app instance returns array of string describing the order of execution of your middleware and where to absolute path of your middleware.

```js
require('express-list-middleware')(app);
```
Would give you something like this.

```js
[ '0. query     at query (.../node_modules/express/lib/middleware/query.js:39:13)',
  '1. expressInit     at expressInit (.../node_modules/express/lib/middleware/init.js:23:41)',
  '2. bound dispatch     at Route.dispatch (.../node_modules/express/lib/router/route.js:105:19)',
  '3. SomeMiddleWare     at SomeMiddleWare (.../example/some-middleware.js:2:6)' ]
```
If there exist something like this:

```js
'3. SomeMiddleWare     undefined'
```
That means one of your middleware is there jamming your system :).

It is more useful in [repl](https://nodejs.org/api/repl.html).
See ```example``` folder or try ```npm start``` or ```node ./example/index.js``` to start using express with REPL.
Demo using it with a loopback app REPL.
![screenshot](/example/demo.png?raw=true)
