// Was used with the random friends generating logic after the array below to seed randomized data for development and testing...currently hardcoded and modified to produce better names and actual photos.
// var friendsArray = [];


friendsArray = [
    {
    "name": "Ahmed",
    "photo": "https://ca.slack-edge.com/TCZ8J283G-UDMUGQNB1-189bb61d9bb1-72",
    "scores": [
    "5",
    "1",
    "4",
    "4",
    "5",
    "1",
    "2",
    "5",
    "4",
    "1"
    ]
    },
    {
    "name": "John",
    "photo": "https://avatars3.githubusercontent.com/u/44559965?s=88&v=4",
    "scores": [
    "5",
    "1",
    "3",
    "4",
    "5",
    "4",
    "4",
    "3",
    "4",
    "3"
    ]
    },
    {
    "name": "Bob",
    "photo": "https://avatars1.githubusercontent.com/u/44072123?s=88&v=4",
    "scores": [
    "4",
    "3",
    "4",
    "3",
    "4",
    "4",
    "1",
    "3",
    "2",
    "1"
    ]
    }
]

// Was used to seed randomized data for development and testing.

// var name = '';
// var photo;
// var ans1;
// var ans3;
// var ans4;
// var ans5;
// var ans6;
// var ans7;
// var ans8;
// var ans9;
// var ans10;
// var scores = [];
// var obj = {};

// for (var i = 0; i < 10; i++) {
//     name = 'n' + i;
//     photo = `https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/${name}.jpg`
//     ans1 = Math.floor((Math.random() * 5) + 1);
//     ans2 = Math.floor((Math.random() * 5) + 1);
//     ans3 = Math.floor((Math.random() * 5) + 1);
//     ans4 = Math.floor((Math.random() * 5) + 1);
//     ans5 = Math.floor((Math.random() * 5) + 1);
//     ans6 = Math.floor((Math.random() * 5) + 1);
//     ans7 = Math.floor((Math.random() * 5) + 1);
//     ans8 = Math.floor((Math.random() * 5) + 1);
//     ans9 = Math.floor((Math.random() * 5) + 1);
//     ans10 = Math.floor((Math.random() * 5) + 1);

//     scores = [(ans1).toString(), (ans2).toString(), (ans3).toString(), (ans4).toString(), (ans5).toString(), (ans6).toString(), (ans7).toString(), (ans8).toString(), (ans9).toString(), (ans10).toString()];
//     obj = { name, photo, scores };

//     friendsArray.push(obj);
// };



// Exporting 'friendsArray' to apiRoutes.js for use in API request output
module.exports = friendsArray;
