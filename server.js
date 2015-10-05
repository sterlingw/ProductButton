/***
 * Webserver for serving built app
 */
var gzippo  = require('gzippo'),
    express = require('express'),
    app     = express(),
    port    = process.env.PORT || 3000;

console.log('' + __dirname + '/');

app.use(gzippo.staticGzip('' + __dirname + '/'));

app.listen(port);