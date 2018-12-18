// Module/package requirements
var express = require('express');

// Expresss setup
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

// Allowing for the use of express in apiRoutes.js and htmlRoutes.js files
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);


// Establishing the express connection 
app.listen(PORT, function() {
    console.log(`App listening on PORT: ${PORT}`);
});

