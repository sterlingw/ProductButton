/***
 * Webserver for serving built app
 */
var gzippo  = require('gzippo'),
    express = require('express'),
    app     = express(),
    port    = process.env.PORT || 3000;

app.use(gzippo.staticGzip('public/'));

app.listen(port);