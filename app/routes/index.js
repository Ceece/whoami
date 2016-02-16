'use strict';

var Whoami = require(process.cwd() + '/app/controllers/Whoami.server.js');


module.exports = function (app) {

   app.route('/').get(Whoami);
   
};
