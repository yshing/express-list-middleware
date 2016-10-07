'use strict';
function listMiddleWare (app){
  return Array.prototype.map.call(app._router.stack, function (middleware, index){
    return index+'. ' + middleware.name + ' ' + getFileLine(middleware.handle);
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
