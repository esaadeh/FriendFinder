// Was used with the random friends generating logic after the array below to seed randomized data for development and testing...currently hardcoded and modified to produce better names and actual photos.
// var friendsArray = [];

friendsArray = [
    {
    "name": "Ahmed",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
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
    "photo": 'https://www.google.com/search?q=jpg+images&tbm=isch&source=iu&ictx=1&fir=yIgGvQEa-cY36M%253A%252CZhiBOEkiGbW2tM%252C_&usg=AI4_-kTqGTsYtCV0M7N0W3Y6L5krvxTgAQ&sa=X&ved=2ahUKEwih-8G7xanfAhXHhVQKHUh4BiYQ9QEwAHoECAIQBA#imgrc=yIgGvQEa-cY36M:',
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
    "name": "Mary",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/n1.jpg",
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
    },
    {
    "name": "Jenn",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/n2.jpg",
    "scores": [
    "4",
    "3",
    "3",
    "4",
    "3",
    "4",
    "1",
    "3",
    "4",
    "5"
    ]
    },
    {
    "name": "Bill",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/n3.jpg",
    "scores": [
    "3",
    "3",
    "2",
    "2",
    "4",
    "3",
    "4",
    "5",
    "3",
    "5"
    ]
    },
    {
    "name": "Amy",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/n4.jpg",
    "scores": [
    "2",
    "3",
    "3",
    "1",
    "2",
    "3",
    "3",
    "2",
    "2",
    "2"
    ]
    },
    {
    "name": "Scott",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/n5.jpg",
    "scores": [
    "2",
    "4",
    "1",
    "2",
    "1",
    "4",
    "1",
    "2",
    "2",
    "1"
    ]
    },
    {
    "name": "Jane",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/n6.jpg",
    "scores": [
    "5",
    "5",
    "3",
    "4",
    "2",
    "2",
    "4",
    "5",
    "2",
    "2"
    ]
    },
    {
    "name": "Jan",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/n7.jpg",
    "scores": [
    "5",
    "5",
    "3",
    "1",
    "5",
    "3",
    "4",
    "3",
    "1",
    "3"
    ]
    },
    {
    "name": "Matt",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/n8.jpg",
    "scores": [
    "5",
    "4",
    "3",
    "2",
    "1",
    "5",
    "5",
    "5",
    "3",
    "4"
    ]
    },
    {
    "name": "Tim",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/n9.jpg",
    "scores": [
    "5",
    "5",
    "4",
    "4",
    "2",
    "3",
    "4",
    "2",
    "3",
    "1"
    ]
    }
    ];


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
