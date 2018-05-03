
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 3000;

const htmlRoutes = require('./app/routing/htmlRoutes');
const apiRoutes = require('./app/routing/apiRoutes');


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.use(express.static(path.join(__dirname, './app/public')));


app.use('/', htmlRoutes);
app.use('/api', apiRoutes);


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
