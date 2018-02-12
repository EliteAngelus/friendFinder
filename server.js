// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});

app.get("/results", function(req, res) {
    res.sendFile(path.join(__dirname, "results.html"));
});


// Friends Data
// =============================================================
var friends = [{
        name: "Ahmed",
        photo: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
        scores: [
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
        name: "Jacob Deming",
        photo: "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
        scores: [
            "4",
            "2",
            "5",
            "1",
            "3",
            "2",
            "2",
            "1",
            "3",
            "2"
        ]
    },
    {
        name: "Jeremiah Scanlon",
        photo: "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
        scores: [
            "5",
            "2",
            "2",
            "2",
            "4",
            "1",
            "3",
            "2",
            "5",
            "5"
        ]
    },
    {
        name: "Louis T. Delia",
        photo: "https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg",
        scores: [
            "3",
            "3",
            "4",
            "2",
            "2",
            "1",
            "3",
            "2",
            "2",
            "3"
        ]
    },
    {
        name: "Lou Ritter",
        photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAkDAAAAJDhhZTI5NTk2LWQzZjUtNDJjZi1hMTM2LTQ3ZjNmYjE0YmY2NA.jpg",
        scores: [
            "4",
            "3",
            "4",
            "1",
            "5",
            "2",
            "5",
            "3",
            "1",
            "4"
        ]
    },
    {
        name: "Jordan Biason",
        photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAisAAAAJGUxYzc4YzA0LWQxMzUtNGI4NS04YTFiLTkwYzM0YTZkNzA2NA.jpg",
        scores: [
            "4",
            "4",
            "2",
            "3",
            "2",
            "2",
            "3",
            "2",
            "4",
            "5"
        ]
    }
]


//Routes =============================================================

// app.get("api/friends", function(req, res) {
//     return res.json(friends);
// });

app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newFriend = req.body;

    console.log(newFriend);

    friends.push(newFriend);

    res.json(newFriend);

    // If statment that will match the survey result with the friends array.
    // Compatitbility logic  - takes in JSON input
});

// Get json that matches name that is entered. 
app.get("/api/allfriends/:frienddata?", function(req, res) {
    var friendNow = req.params.tabledata;

    if (friendNow) {
        console.log(friendNow);

        for (var i = 0; i < friends.length; i++) {

            return res.json(friends[i]);
        }
        return res.json(false);
    }
    return res.json(friends);
});
// app.get("/api/allfriends", function(req, res) {

//     return res.json(friends);
// });


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});