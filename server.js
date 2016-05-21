// =====================================
// get the packages we need ============
// =====================================
var express         = require('express'),
  http            = require('http'),
  app             = express(),
  compress = require('compression');

// =======================
// configuration =========
// =======================


var port = process.env.PORT || 5000; 

var clientPath;
if(process.env.NODE_ENV === 'production'){
    clientPath = '/dist';
} else {
    clientPath = '/client';
}

app.use(compress());
app.use(express.static(__dirname + clientPath));


// =======================
// start the server ======
// =======================

var server = http.createServer(app);

server.listen(port, function(){
    console.info('Express server listening on port ' + port);
});


// =======================
// routes ================
// =======================

//require('./routes/testing')(app,express);

