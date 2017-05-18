var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var setupController = require('./controllers/setupController'); //aware of endpoint 
var apiController = require('./controllers/apiController');


var port = process.env.PORT || 3000;

app.use('/', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

//single connection - stays open.
mongoose.connect(config.getDbconnectionString());
//add endpoint
setupController(app);
apiController(app);

app.listen(port);
