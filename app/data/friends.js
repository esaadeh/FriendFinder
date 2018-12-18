var friendsArray = [];
friendsArray = [
    {
        "name": "Ahmed",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [
            '5',
            '1',
            '4',
            '4',
            '5',
            '1',
            '2',
            '5',
            '4',
            '1'
        ]
    },
    {
        "name": "TEST",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [
            '2',
            '4',
            '2',
            '5',
            '5',
            '2',
            '4',
            '5',
            '4',
            '3'
        ]
    }
];


var name = '';
var photo;
var ans1;
var ans3;
var ans4;
var ans5;
var ans6;
var ans7;
var ans8;
var ans9;
var ans10;
var scores = [];
var obj = {};

for (var i = 0; i < 1; i++) {
    name = 'n' + i;
    photo = `https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/${name}.jpg`
    ans1 = Math.floor((Math.random() * 5) + 1);
    ans2 = Math.floor((Math.random() * 5) + 1);
    ans3 = Math.floor((Math.random() * 5) + 1);
    ans4 = Math.floor((Math.random() * 5) + 1);
    ans5 = Math.floor((Math.random() * 5) + 1);
    ans6 = Math.floor((Math.random() * 5) + 1);
    ans7 = Math.floor((Math.random() * 5) + 1);
    ans8 = Math.floor((Math.random() * 5) + 1);
    ans9 = Math.floor((Math.random() * 5) + 1);
    ans10 = Math.floor((Math.random() * 5) + 1);

    scores = [(ans1).toString(), (ans2).toString(), (ans3).toString(), (ans4).toString(), (ans5).toString(), (ans6).toString(), (ans7).toString(), (ans8).toString(), (ans9).toString(), (ans10).toString()];
    obj = { name, photo, scores };

    friendsArray.push(obj);
};
console.log(friendsArray);




module.exports = friendsArray;
