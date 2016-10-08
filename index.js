'use strict';
function listMiddleWare (app){
  var appStack = app._router.stack || app.stack || undefined;
  return Array.prototype.map.call(appStack, function (middleware, index){
    return index+'. ' + (middleware.handle.name || '<anonymous function>') + ' ' +
      getFileLine(middleware.handle);
  });
  // force the middleware to produce an error to locate the file.
  function getFileLine(handler){
    try{
      handler(undefined);
    } catch(e){
      return e.stack.split('\n')[1];
    }
  }
}
module.exports = listMiddleWare;
