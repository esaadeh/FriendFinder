


//Establish data in data file

var friends = require("../data/friends");

//Routing


module.exports = function (app) {


    // Listens for a get request on the '/api/friends' route and responds with a json of the friends objects array
    app.get('/api/friends', function (req, res) {
        res.json(friends);
        // console.log(res);
        // console.log(friends);
    });

    // Listens for  post request on the '/api/friends' route...
    app.post('/api/friends', function (req, res) {
        // console.log(friends[0].scores);
        // console.log(friends[0].socres);

        var newPost = req.body;
        // var newScores = req.body.scores;
        console.log(newPost.scores);
        // console.log(parseInt(friends[0].scores[0]));
        // console.log((newPost.scores[0]));
        // console.log(parseInt(friends[0].scores[0]) + parseInt(newPost.scores[0]));

        // console.log(friends.length);
        // console.log(friends[0].scores.length);
        // console.log(newPost.scores.length);
        
        var match = 50;
        var matchIndex = 0;
        for (var i = 0; i < friends.length; i++) {
             var delta = 0;
            for (var y = 0; y < newPost.scores.length; y++) {
                delta += Math.abs((friends[i].scores[y]) - newPost.scores[y]);
                console.log(delta);
            }

            if (delta < match) {
                match = delta;
                matchIndex = i;
                
                console.log('match: ' + match);
                console.log('Index: ' +matchIndex);
            }
        }

        friends.push(newPost);
        // res.json(true);

        //Output logic here for the json(reply)
        res.json(friends[matchIndex]);
    });

};
