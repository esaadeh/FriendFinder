// Was used with the random friends generating logic after the array below to seed randomized data for development and testing...currently hardcoded and modified to produce better names and actual photos.
// var friendsArray = [];


friendsArray = [
    {
    "name": "Ahmed",
    "photo": "https://jooinn.com/funny-face.html#gal_post_96288_funny-face-1.jpg",
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
    "photo": "https://static1.squarespace.com/static/56b62e0d7da24fb337cbddc8/56b662a65bd33056748e2481/56b662a65bd33056748e2487/1454798191712/orphan+faces+africa+lifestyle+non-profit+documentary+photography-1231.jpg",
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
    "photo": "https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg",
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
    "photo": "https://static1.squarespace.com/static/575719aa20c64748d571fdaf/5757317362cd942208607b32/5945506c579fb34716168376/1497714796926/NN11477444.jpg",
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
    "photo": "https://bloximages.newyork1.vip.townnews.com/westerngazette.ca/content/tncms/assets/v3/editorial/0/64/064bddd2-0691-11e7-9c3c-33f43b3adc2e/58c4501062fb6.image.jpg",
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
    "photo": "https://static1.squarespace.com/static/575719aa20c64748d571fdaf/5757317362cd942208607b32/5757320427d4bd18286d4b0b/1465332244691/NYC142483.jpg",
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
    "photo": "https://tutorialedge.net/images/tony-stark.jpg",
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
    "photo": "https://static1.squarespace.com/static/52ef0a16e4b0c45fade63d38/5634fd5ce4b017e2546cdcf9/5bca08b2652deadabc04953e/1539967295498/Witch+Green+Face+Paint.jpg",
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
    "photo": "https://static1.squarespace.com/static/52e59a99e4b0423ffa1e97ee/52e5b642e4b04ab8b0fc9fb8/5523fb82e4b0a4a6330075cd/1428421512848/humanae+97-7+C.jpg",
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
    "photo": "http://www.miketyka.com/projects/faces/00346000.jpg.cover.jpg",
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
    "photo": "https://i.kym-cdn.com/photos/images/original/000/092/462/c2f.jpg",
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
