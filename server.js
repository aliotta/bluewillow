// =====================================
// get the packages we need ============
// =====================================
var express         = require('express'),
  http            = require('http'),
  app             = express()

// =======================
// configuration =========
// =======================


var port = process.env.PORT || 5000; 


app.use(express.static(__dirname + "/client"));


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

