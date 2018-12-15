


//Establish data in data file

var friends = require("../data/friends");

//Routing


module.exports = function(app) {


    // Listens for a get request on the '/api/friends' route and responds with a json of the friends objects array
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    // Listens for  post request on the '/api/friends' route...
    app.post('/api/friends', function (req, res) {

        var newPost = req.body;

        friends.push(newPost);
        // res.json(true);

        // // Using a RegEx Pattern to remove spaces from newCharacter
        // // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        // newPost.name = newPost.name.replace(/\s+/g, "").toLowerCase();
        // newPost.photo = newPost.photo.replace(/\s+/g, "").toLowerCase();
        // newPost.phone = newPost.name.replace(/\s+/g, "").toLowerCase();
        // newPost.email = newPost.name.replace(/\s+/g, "").toLowerCase();
        // newPost.uniqueID = newPost.name.replace(/\s+/g, "").toLowerCase();
        // console.log(newPost);

        // reservations.push(newPost);

        res.json(newPost);

    });

};