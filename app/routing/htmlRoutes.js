






// htmlRoutes.js 

// Listens for a get request on the '/' (home) route and responds with the home.html file
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'home.html'));
});

// Listens for a get request on the '/survey' route and responds with the survey.html file
app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, 'survey.html'));
});

