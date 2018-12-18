# FriendFinder
Heroku Link:
https://serene-earth-59932.herokuapp.com/

A compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

Express to handle routing. Deployed to Heroku.

Survey has 10 questions. Each answer on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

The htmlRoutes.js file includes two routes:

- A GET Route to '/survey' which displays the survey page.
- A default, catch-all route that leads to home.html which displays the home page.



The apiRoutes.js file contains two routes:

-A GET route with the url /api/friends. This is used to display a JSON of all possible friends.
-A POST routes /api/friends. This is used to handle incoming survey results and the compatibility logic (explained below).


Compatibility Logic:

- The application's data is saved inside of app/data/friends.js as an array of objects.
- Each user's results is converted into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
- The current user's (poster's) inputs are compared against those from all other users in the array, question by question and an abosolute value comparison 'delta' is computed for each. 
- The match with the lowest delta score is displayed as a modal pop-up with the name and picture of the match.