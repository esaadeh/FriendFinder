
// Establish data in data file
// Requiring the 'friedsArray' from friends.js and setting it to 'friends'
var friends = require("../data/friends");

// API Routing

module.exports = function (app) {


    // Listens for a get request on the '/api/friends' route and responds with a json of the friends objects array
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    // Listens for  post request on the '/api/friends' route...
    app.post('/api/friends', function (req, res) {

        // Match Logic: Variable 'match' is used to initially compare the difference in scores logged between the new poster of data 'newPost' and the first person in the array.  Set to 50 to be out of the range of possibility in difference and then is used to hold the lowest difference('delta') between newPost and everyone in the friendsArray 
        var newPost = req.body;
        var match = 50;
        var matchIndex = 0;
        // Looping through 'friendsArrary' and internally comparing their 'scores' arrays
        for (var i = 0; i < friends.length; i++) {
            var delta = 0;
            for (var y = 0; y < newPost.scores.length; y++) {
                delta += Math.abs((friends[i].scores[y]) - newPost.scores[y]);
            }
            // Caching the lowest difference delta in what is the current lowest difference 'match' and caching the 'friendsArray' index number ('matchIndex') that produced that 'match' 
            if (delta < match) {
                match = delta;
                matchIndex = i;
            }
        }
// Pushing the 'newPost' obect into the 'friendsArray' after a match has been found
        friends.push(newPost);
       

        //Output logic here for the json(reply)
        // Outputting the match
        res.json(friends[matchIndex]);
    });

};
