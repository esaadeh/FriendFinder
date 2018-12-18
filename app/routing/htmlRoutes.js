// Module/package requirements
var path = require('path');




// Routing

module.exports = function(app) {


// Listens for a get request on the '/survey' route and responds with the survey.html file
app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
});

// If no matching route is found default to home
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

};